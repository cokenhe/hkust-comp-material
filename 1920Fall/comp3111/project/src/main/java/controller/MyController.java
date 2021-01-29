package controller;

// MARK: javafx
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.Tooltip;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Alert;
import javafx.scene.input.*;
import javafx.event.*;
import javafx.fxml.FXML;    
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.CornerRadii;
import javafx.geometry.Insets;
import javafx.scene.paint.Color;
import javafx.scene.image.Image;

// MARK: java 
import java.util.Random;

// MARK: custom classes
import monster.*;
import tower.*;
import helper.Location;
import helper.GameConfig;
import helper.Helper;

public class MyController {
    @FXML
    private Button buttonNextFrame;
    
    @FXML
    private Button buttonSimulate;

    @FXML
    private Button buttonPlay;

    @FXML
    private Button buttonUpgrade;

    @FXML
    private Button buttonDestroy;

    @FXML
    private AnchorPane paneArena;

    @FXML
    private Label labelBasicTower;

    @FXML
    private Label labelIceTower;

    @FXML
    private Label labelCatapult;

    @FXML
    private Label labelLaserTower;

    @FXML
    private Label labelMoneyAmount;

    @FXML
    private Label labelEnergyAmount;

    private int selectedX, selectedY;
    private Tower selectedTower;

    private static int number_of_frame = 0;
    private static int number_of_monster = 0;
    private static int number_of_tower = 0;
    private static boolean isGameEnd = false;
    private static Random rand = new Random(System.currentTimeMillis());
    private static Monster monsters[] = new Monster[GameConfig.MAX_MONSTER_NUMBER];
    private static Tower towers[] = new Tower[GameConfig.MAX_TOWER_NUMBER];
    
    private static Alert endGameDialog = new Alert(AlertType.INFORMATION);
    private Label grids[][] = new Label[GameConfig.MAX_V_NUM_GRID][GameConfig.MAX_H_NUM_GRID]; //the grids on arena

    /**
     * A dummy function to show how button click works
     */
    
    @FXML
    private void play() {
        System.out.println("Play button clicked");
    }

    /**
     * A function that create the Arena
     */
    @FXML
    public void createArena() {
        if (grids[0][0] != null)
            return; //created already
        for (int i = 0; i < GameConfig.MAX_V_NUM_GRID; i++)
            for (int j = 0; j < GameConfig.MAX_H_NUM_GRID; j++) {
                Label newLabel = new Label();
                if (j % 2 == 0 || i == ((j + 1) / 2 % 2) * (GameConfig.MAX_V_NUM_GRID - 1))
                    newLabel.setBackground(new Background(new BackgroundFill(Color.WHITE, CornerRadii.EMPTY, Insets.EMPTY)));
                else
                    newLabel.setBackground(new Background(new BackgroundFill(Color.GREEN, CornerRadii.EMPTY, Insets.EMPTY)));
                
                newLabel.setId(String.format("%d,%d", i, j));
                newLabel.setLayoutX(j * GameConfig.GRID_WIDTH);
                newLabel.setLayoutY(i * GameConfig.GRID_HEIGHT);
                newLabel.setMinWidth(GameConfig.GRID_WIDTH);
                newLabel.setMaxWidth(GameConfig.GRID_WIDTH);
                newLabel.setMinHeight(GameConfig.GRID_HEIGHT);
                newLabel.setMaxHeight(GameConfig.GRID_HEIGHT);
                newLabel.setStyle("-fx-border-color: black;");
                grids[i][j] = newLabel;
                paneArena.getChildren().addAll(newLabel);
            }
        setUI();
        setDragAndDrop();
    }
    /**
     * A function that called every frame, to check end game or not and control perform the generation and movement of monster
     */
    @FXML
    private void nextFrame() {
        deselectTower();               // de-select tower
        if(!isGameEnd){               // the game still not end
            updateResources(150 + number_of_frame * 30);       // give money to player every frame     
            cleanIcon();              // clear all monster's icon
            moveMonster();            // all existing monster move 
            fireAttack();             // tower fire to monster
            generateMonster();        // gernerate monster every 3 frames
            iconUpdate();             // update icon of monster  
            checkEndGame();
        }
        else
            endGameDialog.showAndWait().ifPresent((btnType) -> {});    //show dialog to say game over   
    }
    /**
     * call to upgrade a tower
     */
    @FXML 
    private void upgradeTower() {
        if (selectedTower.getLevel() >= GameConfig.MAX_TOWER_LEVEL) {
            Helper.instance.showAlert("Upgrade Fail", "Tower alreday at max level");
            return;
        }

        int money = Integer.parseInt(labelMoneyAmount.getText());
        if (money < selectedTower.getUpgradeCost()) {
            Helper.instance.showAlert("Upgrade Fail", "Not enough money");
            return;
        }
        
        updateResources(-this.selectedTower.getUpgradeCost());
        this.selectedTower.upgrade();

        Helper.instance.showAlert("Upgrade Success", "Tower upgraded to level " + selectedTower.getLevel() + " successfully");

        grids[selectedY][selectedX].setTooltip(new Tooltip(selectedTower.getDescription()));
    }
    /**
     * call to destory a tower
     */
    @FXML 
    private void destroyTower() {
        boolean found = false;
        for (int i = 0; i < number_of_tower; i++) {
            if (towers[i] == selectedTower) {
                number_of_tower -= 1;
                found = true;
            }

            if (found) towers[i] = towers[i + 1];
        }              
                
        grids[selectedY][selectedX].setGraphic(null);
        grids[selectedY][selectedX].setOnMouseClicked(null);
        setDragDropHandler(selectedX, selectedY);
        deselectTower();
    }

    /**
     * De-select a tower
     */
    @FXML
    private void deselectTower() {
        buttonUpgrade.setDisable(true);
        buttonDestroy.setDisable(true);
        grids[selectedY][selectedX].setStyle("-fx-border-color: black;");
        toggleFireRange(false);
    }
    /**
     * A function that generate monster randomly
     */
    private void generateMonster(){
        if(number_of_frame++ % 3 == 0 && number_of_monster<= GameConfig.MAX_MONSTER_NUMBER ){ 
            switch(rand.nextInt(GameConfig.NO_OF_MONSTER_TYPE)){
                case 0:
                    monsters[number_of_monster++] = new Fox(number_of_frame);
                    break;
                case 1:
                    monsters[number_of_monster++] = new Unicorn(number_of_frame);
                    break;
                case 2:
                    monsters[number_of_monster++] = new Penguim(number_of_frame);
                    break;
            }
            if(rand.nextInt(100)%5==0){ //20% chance to generate an extra monster
                switch(rand.nextInt(GameConfig.NO_OF_MONSTER_TYPE)){
                    case 0:
                        monsters[number_of_monster++] = new Fox(number_of_frame);
                        break;
                    case 1:
                        monsters[number_of_monster++] = new Unicorn(number_of_frame);
                        break;
                    case 2:
                        monsters[number_of_monster++] = new Penguim(number_of_frame);
                        break;
                }   
            }
        }
    }
    
    /**
     * clean the icon of monster in the whole arena
     */
    private void cleanIcon(){
        for(int i=0;i<number_of_monster;++i){
            Location monster = monsters[i].getLocation();
            Label grid = monster.getGridLabel(grids);
            
            grid.setBackground(new Background(new BackgroundFill(Color.WHITE, CornerRadii.EMPTY, Insets.EMPTY)));
            grid.setGraphic(null);
            grid.setTooltip(null);
        }
    }
    /**
     * all monster still alive will call move() acoording to its'speed times, the icon will not change yet.
     */
    private void moveMonster(){
        for(int i=0;i<number_of_monster;++i){
            if(monsters[i].isAlive()){
                for(int j=0;j<monsters[i].getSpeed();++j)
                    monsters[i].move();
            }       
        }
    }

    /**
     * All the tower shoot the closest monster
     */
    private void fireAttack() {
        for (int i = 0; i < number_of_tower; i++) {
            towers[i].attack(monsters);
        }
    }

    /**
     * update the icon of living monster in the whole arena
     */
    private void iconUpdate(){
        for (int i = 0; i < number_of_monster; ++i) {
            Label grid = monsters[i].getLocation().getGridLabel(grids);

            if(monsters[i].isAlive()){
                Helper.instance.setGraphic(grid, monsters[i].getIcon());
                grid.setTooltip(new Tooltip(monsters[i].getDescription()));                      
            }       
            if(monsters[i].isDying()&&!monsters[i].isAlive()){
                Helper.instance.setGraphic(grid, monsters[i].getIcon());
                grid.setTooltip(new Tooltip(monsters[i].getDescription()));   
                monsters[i].dead();
                updateResources(monsters[i].getReward());
            }                     
        }

        for (int i = 0; i < number_of_tower; i++) {
            Label grid = towers[i].getLocation().getGridLabel(grids);
            grid.setTooltip(new Tooltip(towers[i].getDescription()));
        }
    }

    /**
     * Adjust the resources value
     * @param money the value add / minor to money
     */
    private void updateResources(int money) {
        int moneyBalance = Integer.parseInt(labelMoneyAmount.getText());
        moneyBalance += money;
        labelMoneyAmount.setText(Integer.toString(moneyBalance));
    }

    /**
     * Construct a tower at grids[y][x]
     * @param towerType the tower type: basicTower | catapult | iceTower | laserTower
     * @param x x coordinate
     * @param y y corrdinate
     * @return true - construct success, false - cnstruct fail
     */
    private boolean constructTower(String towerType, int x, int y) {
        int moneyBalance = Integer.parseInt(labelMoneyAmount.getText());
        int cost = 0;
        int px = x * GameConfig.GRID_HEIGHT + 20;
        int py = y * GameConfig.GRID_WIDTH + 20;

        if (towerType.compareTo("basicTower") == 0) {
            cost = BasicTower.BUILDCOST;
            if (cost > moneyBalance) return false;
            towers[number_of_tower++] = new BasicTower(px, py);
        }
        else if (towerType.compareTo("catapult") == 0) {
            cost = CatapultTower.BUILDCOST;
            if (cost > moneyBalance) return false;
            towers[number_of_tower++] = new CatapultTower(px, py);
        }
        else if (towerType.compareTo("iceTower") == 0) {
            cost = IceTower.BUILDCOST;
            if (cost > moneyBalance) return false;
            towers[number_of_tower++] = new IceTower(px, py);
        }
        else if (towerType.compareTo("laserTower") == 0) {
            cost = LaserTower.BUILDCOST;
            if (cost > moneyBalance) return false;
            towers[number_of_tower++] = new LaserTower(px, py);
        }
        else return false;

        grids[y][x].setTooltip(new Tooltip(towers[number_of_tower - 1].getDescription()));
        updateResources(-cost);
        return true;
    }
    
    /**
     * all monster still alive will call move() acoording to its'speed times, the icon will not change yet.
     */
    @FXML
    private void checkEndGame(){
        for(int i=0;i<number_of_monster;++i){
            if(monsters[i].isReachEndZone()){
                endGameDialog.setTitle("The game is over");
                endGameDialog.setHeaderText("A monster reached the end-zone");
                endGameDialog.showAndWait().ifPresent((btnType) -> {});
                isGameEnd = true;
                System.out.println("Gameover");
            }       
        }
    }

    /**
     * Look for the corresponding tower at grids[y][x]
     */
    public void searchTower() {
        for (int i = 0; i < number_of_tower; i++) {
            int x = towers[i].getLocation().getGridX();
            int y = towers[i].getLocation().getGridY();
            if (x == selectedX && y == selectedY) {
                selectedTower = towers[i];
                break;
            }
            selectedTower = null;
        }
    }

    /**
     * Turn the grids that inside attack range into HINT COLOR
     * @param shouldOn true - ON , false - OFF
     */
    public void toggleFireRange(boolean shouldOn) {
        Color toColor = shouldOn ? GameConfig.HINT_COLOR : Color.WHITE;
        Color fromColor = shouldOn ? Color.WHITE : GameConfig.HINT_COLOR;

        for (int i = 0; i < GameConfig.MAX_V_NUM_GRID; i++)
            for (int j = 0; j < GameConfig.MAX_H_NUM_GRID; j++) {
                Label target = grids[i][j];
                if (target != null 
                    && target.getBackground() != null 
                    && target.getBackground().getFills().size() > 0 
                    && target.getBackground().getFills().get(0).getFill() == fromColor) 
                    if (selectedTower.isInRange(new Location(j * GameConfig.GRID_HEIGHT + 20, i * GameConfig.GRID_WIDTH + 20))) 
                        target.setBackground(new Background(new BackgroundFill(toColor, CornerRadii.EMPTY, Insets.EMPTY)));
            }
    }

    /**
     * Setup the styles of UI elements
     */
    private void setUI() {
        labelMoneyAmount.setText(Integer.toString(GameConfig.INITIAL_MONEY_BALANCE));
        labelMoneyAmount.setTextFill(Color.ORANGE);
        buttonDestroy.setDisable(true);
        buttonUpgrade.setDisable(true);

        labelBasicTower.setTooltip(new Tooltip(
            "Basic Tower\n" +
            "A normal tower\n" +
            "Price: $" + BasicTower.BUILDCOST));
        labelIceTower.setTooltip(new Tooltip(
            "Ice Tower\n" +
            "Tower with lower attack power\n" +
            "but able to slow down monster speed\n" +
            "Price: $" + IceTower.BUILDCOST));
        labelCatapult.setTooltip(new Tooltip(
            "Catapult Tower\n" +
            "Tower can attack all the monsters in\n" +
            "the same grid, unable to attack close monster\n" +
            "Price: $" + CatapultTower.BUILDCOST));
        labelLaserTower.setTooltip(new Tooltip(
            "Laser Tower\n" +
            "Tower with unlimited attack range\n" + 
            "able to attack all the monsters on the path\n" +
            "need to consume energy\n" +
            "(auto-recharge when out of energy)\n" +
            "Price: $" + LaserTower.BUILDCOST));
    }

    /**
     * A function that demo how drag and drop works
     */
    private void setDragAndDrop() {
        labelBasicTower.setOnDragDetected(new DragEventHandler(labelBasicTower));
        labelIceTower.setOnDragDetected(new DragEventHandler(labelIceTower));
        labelCatapult.setOnDragDetected(new DragEventHandler(labelCatapult));
        labelLaserTower.setOnDragDetected(new DragEventHandler(labelLaserTower));

        for (int i = 0; i < GameConfig.MAX_V_NUM_GRID; i++)
            for (int j = 0; j < GameConfig.MAX_H_NUM_GRID; j++) 
                setDragDropHandler(j, i);
    }

    /**
     * Set drag and drop event handler to grids[y][x]
     * @param x x coordinate
     * @param y y coordinate
     */
    private void setDragDropHandler(int x, int y) {
        Label target = grids[y][x];
        if (target.getBackground().getFills().get(0).getFill() == Color.WHITE) return;

        target.setOnDragEntered((event) -> {
            if (event.getGestureSource() != target && event.getDragboard().hasString()) 
                target.setStyle("-fx-border-color: red;");
            event.consume();
        });

        target.setOnDragOver((event) -> {
            if (event.getGestureSource() != target && event.getDragboard().hasString()) 
                event.acceptTransferModes(TransferMode.COPY_OR_MOVE);
            event.consume();
        });

        target.setOnDragDropped(new DragDroppedEventHandler());

        target.setOnDragExited((event) -> {
            target.setStyle("-fx-border-color: black;");
            event.consume();
        });
    }

    /**
     * handle drag event
     */
    class DragEventHandler implements EventHandler<MouseEvent> {
        private Label source;
        public DragEventHandler(Label e) {
            source = e;
        }
        @Override
        public void handle (MouseEvent event) {
            Dragboard db = source.startDragAndDrop(TransferMode.ANY);
            ClipboardContent content = new ClipboardContent();
            Image image = new Image(source.getId() + ".png");
            content.putImage(image);
            content.putString(source.getId());
            db.setContent(content);

            event.consume();
        }
    }
    /**
     * handle drag and drop event
     */
    class DragDroppedEventHandler implements EventHandler<DragEvent> {
        @Override
        public void handle(DragEvent event) {
            Dragboard db = event.getDragboard();
            boolean success = false;
            if (db.hasString() && ((Label)event.getGestureTarget()).getGraphic() == null) {
                Label target = (Label) event.getGestureTarget();
                target.setText("");
                
                String targetLocation = target.getId();
                int y = Integer.parseInt(targetLocation.split(",")[0]);
                int x = Integer.parseInt(targetLocation.split(",")[1]);
                if (!constructTower(db.getString(), x, y)) {
                    Helper.instance.showAlert("Construct Tower Fail", "Not Enough Money");
                    event.consume();
                    return;
                }

                Helper.instance.setGraphic(target, db.getString() + ".png");
                target.setStyle("-fx-border-color: black;");

                target.setOnDragDropped(null);
                target.setOnDragEntered(null);
                target.setOnDragOver(null);
                target.setOnDragExited(null);

                target.setOnMouseClicked(new ClickedEventHandler());

                success = true;
            }
            event.setDropCompleted(success);
            event.consume();

        }
    }
    /**
     * handle clicked event
     */
    class ClickedEventHandler implements EventHandler<MouseEvent> {

        @Override
        public void handle(MouseEvent event) {
            deselectTower();

            Label target = (Label) event.getTarget();
            String targetLocation = target.getId();
            selectedY = Integer.parseInt(targetLocation.split(",")[0]);
            selectedX = Integer.parseInt(targetLocation.split(",")[1]);
            searchTower();
            toggleFireRange(true);

            target.setStyle("-fx-border-color: yellow;");

            buttonUpgrade.setDisable(false);
            buttonDestroy.setDisable(false);

            event.consume();
        }
    }

}