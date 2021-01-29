package tower;

import helper.Describable;
import helper.Location;
import monster.Monster;

abstract public class Tower implements Describable {

    protected int[] attackPower;
    protected int range;
    protected int[] upgradeCost;
    protected int level = 1;
    protected final int MAXLEVEL = 5;
    protected Location loc;

    /**
     * @return the attackPower
     */
    public int getAttackPower() {
        return attackPower[level - 1];
    }

    /**
     * @return the range
     */
    public int getRange() {
        return range;
    }

    /**
     * @return the upgradeCost
     */
    public int getUpgradeCost() {
        return upgradeCost[level - 1];
    }

    /**
     * @return the location
     */
    public Location getLocation() {
        return loc;
    }

    public int getLevel() {
        return level;
    }

    /**
     * Find the Monster nearest to End-Zone in attack range
     * 
     * @param monsters Array of the monster in Arena
     * @return the nearest monster
     */
    public Monster findNearestMonster(Monster[] monsters) {

        int[] inRange = new int[monsters.length];
        int numOfInRange = 0;

        for (int i = 0; monsters[i] != null; ++i) {
            if (isInRange(monsters[i].getLocation()))
                inRange[numOfInRange++] = i;
        }

        if (numOfInRange == 0)
            return null;

        if (numOfInRange > 1) {
            int nearest = inRange[0];
            for (int j = 1; inRange[j] != 0; ++j) {
                double nearestDistance = Math.sqrt((440 - monsters[inRange[0]].getLocation().x)
                        * (440 - monsters[inRange[0]].getLocation().x)
                        + (0 - monsters[inRange[0]].getLocation().y) * (0 - monsters[inRange[0]].getLocation().y));
                double newDistance = Math.sqrt((440 - monsters[inRange[j]].getLocation().x)
                        * (440 - monsters[inRange[j]].getLocation().x)
                        + (0 - monsters[inRange[j]].getLocation().y) * (0 - monsters[inRange[j]].getLocation().y));
                if (nearestDistance > newDistance) {
                    nearest = inRange[j];
                    nearestDistance = newDistance;
                }
            }
            return monsters[nearest];
        } else
            return monsters[inRange[0]];
    }

    /**
     * Find a monster to attack
     * 
     * @param monsters Monsters in the Arena
     */
    public void attack(Monster[] monsters) {
        Monster selectedMonster = findNearestMonster(monsters);
        if (selectedMonster != null)
            selectedMonster.reduceHP(attackPower[level - 1]);
    }

    @Override
    public String getDescription() {
        return String.format("Attack Power: %d\n" + "Attack Range: %d\n" + "Upgrade Cost: %d", getAttackPower(),
                getRange(), getUpgradeCost());
    }

    /**
     * Check if the monster is in the attack range
     * 
     * @param monsterLoc monster's location
     * @return true - inRange / false - out of range
     */
    public abstract boolean isInRange(Location monsterLoc);

    /**
     * Upgrade some value of tower to power up it
     */
    public abstract void upgrade();

}
