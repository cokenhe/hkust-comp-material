package helper;

import java.awt.Point;
import javafx.scene.control.Label;
import helper.GameConfig;

/**
 * Save the x, y coordinate in px form
 */
public class Location extends Point {

    private static final long serialVersionUID = 292230760372229957L;

    public Location(int x, int y) {
        super(x, y);
    }

    public double distance(Location l) {
        return this.distance(l);
    }

    /**
     * determine if this point is covered by the laser
     * 
     * @param tower   location of tower
     * @param monster location of monster
     * @return true - in range, false - out of range
     */
    public boolean isInRange(Location tower, Location monster) {
        boolean inRange = false, inSameDirection = false;
        double A, B, C;

        if (tower.x == monster.x) { // verticle line, slope = 0
            inSameDirection = (tower.y > monster.y && tower.y > y) || (tower.y < monster.y && tower.y < y);
            A = 1;
            B = 0;
            C = tower.x;
        } else if (tower.y == monster.y) { // horizontal line, slope = infinity
            inSameDirection = (tower.x > monster.x && tower.x > x) || (tower.x < monster.x && tower.x < x);
            A = 0;
            B = 1;
            C = tower.y;
        } else {
            // General form
            A = (tower.y - monster.y) / (tower.x - monster.x);
            B = -1;
            C = monster.y - A * monster.x;
            // Slope-intercept form for perpendicular equation
            double m, c;
            m = -1 / A;
            c = tower.y - tower.x * m;

            double degree = tower.getAngle(monster);

            inSameDirection = (((degree >= 0 && degree <= 90) || (degree > 270 && degree <= 360))
                    && ((m * x - y + c) * m > 0)) || (degree > 90 && degree <= 270 && ((m * x - y + c) * m < 0));
        }

        inRange = Math.abs(A * x + B * y + C) / Math.sqrt(A * A + 1) <= 3;

        return inRange && inSameDirection;
    }

    /**
     * Convert pixel coordinate to grid label
     * 
     * @param grids the Label grids[][]
     * @return the Label in relative pixel coordinate
     */
    public Label getGridLabel(Label grids[][]) {
        return grids[getGridY()][getGridX()];
    }

    /**
     * Convert pixel to grid coordinate
     * 
     * @return x - coordinate
     */
    public int getGridX() {
        return x / GameConfig.GRID_WIDTH;
    }

    /**
     * Convert pixel to grid coordinate
     * 
     * @return y - coordinate
     */
    public int getGridY() {
        return y / GameConfig.GRID_HEIGHT;
    }

    /**
     * Get the angle between two points in SACT formate, with self as the centre
     * point
     * 
     * @param target target point
     * @return degree from 0 to 359
     */
    private double getAngle(Point target) {
        double angle = Math.toDegrees(Math.atan2(target.y - y, target.x - x));
        if (angle < 0)
            angle += 360;
        return angle;
    }

}