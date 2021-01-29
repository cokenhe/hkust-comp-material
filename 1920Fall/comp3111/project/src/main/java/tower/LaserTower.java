package tower;

import helper.Location;
import monster.Monster;

public class LaserTower extends Tower {

    public static final int BUILDCOST = 200;
    public int energy = 100;
    public boolean recharging = false;
    public int[] consumeRate = { 100, 100, 100, 50, 50 };

    /**
     * Construtor of LaserTower
     * 
     * @param x x-coordinate pixel
     * @param y y-coordinate pixel
     */
    public LaserTower(int x, int y) {
        attackPower = new int[] { 10, 12, 14, 14, 16 };
        range = 150;
        upgradeCost = new int[] { 80, 100, 120, 130, 0 };
        loc = new Location(x, y);
    }

    /**
     * Recharge the energy of tower when energy = 0
     */
    public void recharge() {
        if (energy == 0)
            recharging = true;
        if (recharging)
            energy += 20;
    }

    /**
     * @return the energy
     */
    public int getEnergy() {
        return energy;
    }

    /**
     * @return the consumeRate
     */
    public int getConsumeRate() {
        return consumeRate[level - 1];
    }

    /**
     * @return the isRecharging
     */
    public boolean isRecharging() {
        return recharging;
    }

    @Override
    public void upgrade() {
        if (level >= 5)
            return;
        level++;
    }

    @Override
    public boolean isInRange(Location monsterLoc) {
        return true;
    }

    @Override
    public Monster findNearestMonster(Monster[] monsters) {
        if (!isRecharging()) {
            Monster selectedMonster = super.findNearestMonster(monsters);
            if (selectedMonster != null)
                energy -= consumeRate[level - 1];
            recharge();
            return selectedMonster;
        } else {
            recharge();
            return null;
        }
    }

    @Override
    public String getDescription() {
        return String.format("Attack Power: %d\n" + "Attack Range: %d\n" + "Energy: %d\n" + "Upgrade Cost: %d",
                getAttackPower(), getRange(), getEnergy(), getUpgradeCost());
    }
}
