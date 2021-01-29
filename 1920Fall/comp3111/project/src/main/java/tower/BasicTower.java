package tower;

import helper.Location;

public class BasicTower extends Tower {

    public static final int BUILDCOST = 50;

    /**
     * Construtor of BasicTower
     * 
     * @param x x-coordinate pixel
     * @param y y-coordinate pixel
     */
    public BasicTower(int x, int y) {
        attackPower = new int[] { 5, 6, 7, 8, 9 };
        range = 65;
        upgradeCost = new int[] { 20, 20, 30, 30, 0 };
        loc = new Location(x, y);
    }

    @Override
    public void upgrade() {
        if (level >= MAXLEVEL)
            return;
        level++;
    }

    @Override
    public boolean isInRange(Location monsterLoc) {
        double distance = Math.sqrt(
                (loc.x - monsterLoc.x) * (loc.x - monsterLoc.x) + (loc.y - monsterLoc.y) * (loc.y - monsterLoc.y));
        return (distance <= range);
    }
}
