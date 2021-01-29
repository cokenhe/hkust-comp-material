package tower;

import helper.Location;
import monster.Monster;

public class IceTower extends Tower {

    public static final int BUILDCOST = 60;
    public int[] slowDuration = { 2, 2, 3, 3, 4 };

    /**
     * Construtor of IceTower
     * 
     * @param x x-coordinate pixel
     * @param y y-coordinate pixel
     */
    public IceTower(int x, int y) {
        attackPower = new int[] { 1, 1, 2, 2, 3 };
        range = 65;
        upgradeCost = new int[] { 20, 20, 30, 30, 0 };
        loc = new Location(x, y);
    }

    /**
     * @return the slowDuration
     */
    public int getSlowDuration() {
        return slowDuration[level - 1];
    }

    @Override
    /**
     * slow the monster also
     */
    public void attack(Monster[] monsters) {
        Monster selectedMonster = findNearestMonster(monsters);
        if (selectedMonster != null) {
            selectedMonster.reduceHP(attackPower[level - 1]);
            selectedMonster.slow(slowDuration[level - 1]);
        }

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
