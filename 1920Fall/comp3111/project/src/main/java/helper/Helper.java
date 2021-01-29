package helper;

import javafx.scene.control.Alert;
import javafx.scene.control.Label;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;

/**
 * Helper
 */
public class Helper {

    public static final Helper instance = new Helper();

    public void showAlert(String title, String content) {
        Alert alert = new Alert(AlertType.INFORMATION);
        alert.setTitle(title);
        alert.setHeaderText(content);
        alert.showAndWait().ifPresent((btnType) -> {
        });
    }

    public void setGraphic(Label grid, String url) {
        Image image = new Image(url, 40, 40, true, true);
        grid.setGraphic(new ImageView(image));
        grid.setMaxSize(40.0, 40.0);
    }
}