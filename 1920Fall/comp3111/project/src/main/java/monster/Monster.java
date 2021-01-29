package monster;

import helper.Location;
import helper.Describable;
import helper.GameConfig;

public class Monster implements Describable {

    protected int hp;
    protected int oriSpeed;
    protected int speed; // how many times need to call move() per 1 frames
    protected String icon; // the name of the image
    protected boolean alive;
    protected boolean dying; // the situation which alive == false in the current round, but still need to
                             // display collision.png
    protected Location location;
    protected int reward;
    protected boolean reachEndZone;
    protected int slowDuration;

    /**
     * direction of the monster going
     * DOWNWARD OR UPWARD
     */
    protected enum Direction {
        DOWNWARD(1), UPWARD(-1);

        private int value;

        Direction(int i) {
            this.value = i;
        }
        /**
        * @return direction value
        */
        public int getValue() {
            return this.value;
        }
    }

    protected Direction dir = Direction.DOWNWARD;
    /**
     * Construtor of Monster
     * 
     */
    Monster() {
        location = new Location(20, 20);
        dir = Direction.DOWNWARD;
        hp = 5;
        speed = 1;
        oriSpeed = speed;
        alive = true;
        dying = false;
        reachEndZone = false;
        icon = "";
        slowDuration = 0;
    }
    /**
     * move function of Monster, let monster move 1 grid forward
     * 
     */
    public void move() {
        // still under slow?
        if (slowDuration > 0) // slow period end, recover
            --slowDuration;
        // Initial position
        if (location.x == -1) {
            return;
        }
        // When col is odd, move to right
        if (location.getGridX() % 2 == 1
                || (dir == Direction.DOWNWARD && location.getGridY() == GameConfig.MAX_V_NUM_GRID - 1)
                || (dir == Direction.UPWARD && location.getGridY() == 0)) {
            if (location.getGridX() + 1 >= GameConfig.MAX_H_NUM_GRID) { // monster reach end-zone, end game
                this.reachEndZone = true;
                return;
            }
            location.x += GameConfig.GRID_WIDTH;
            if (location.getGridY() == 0)
                dir = Direction.DOWNWARD;
            if (location.getGridY() == GameConfig.MAX_V_NUM_GRID - 1)
                dir = Direction.UPWARD;
            return;
        }
        // Moving up / down
        location.y += dir.getValue() * GameConfig.GRID_HEIGHT;
    }
    /**
     * @return hp of monster
     * 
     */
    public int getHP() {
        return this.hp;
    }
    /**
     * @param dam the hp that going to deduce
     * 
     */
    public void reduceHP(int dam) {
        this.hp = this.hp - dam;
        if (this.hp < 1) {
            this.alive = false;
            this.icon = "collision.png";
            this.dying = true;
            this.speed = 0;
        }

    }
    /**
     * @return dying
     * 
     */
    public boolean isDying() {
        return this.dying;
    }
    /**
     * set dying to false
     */
    public void dead() {
        this.dying = false;
    }
    /**
     * @return speed
     */
    public int getSpeed() {
        if (slowDuration > 0)
            return this.speed / 2;
        else
            return this.speed;
    }
    /**
     * @return alive
     * 
     */
    public boolean isAlive() {
        return this.alive;
    }
    /**
     * @return icon
     * 
     */
    public String getIcon() {
        return this.icon;
    }
    /**
     * @return location
     * 
     */
    public Location getLocation() {
        return this.location;
    }
    /**
     * @return reward
     * 
     */
    public int getReward() {
        return this.reward;
    }
    /**
     * @return reachEndZone
     */
    public boolean isReachEndZone() {
        return this.reachEndZone;
    }
    /**
     * @return slowDuration
     */
    public int getslowDuration() {
        return this.slowDuration;
    }
    /**
     * @param duration the duraiton of slow 
     */
    public void slow(int duration) { 
        this.slowDuration = duration;
        this.speed /= 2;
    }
    /**
     * @return the  descrption of monster that form by it's attribute 
     */
    @Override
    public String getDescription() {
        return String.format("HP:\t\t%d\n" + "Speed:\t\t%d\n" + "Reward:\t$%d", getHP(), getSpeed(), getReward());
    }
}
