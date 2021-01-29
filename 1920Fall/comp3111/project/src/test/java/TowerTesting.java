import org.junit.Test;

import monster.Fox;
import monster.Monster;
import tower.BasicTower;
import tower.CatapultTower;
import tower.IceTower;
import tower.LaserTower;
import tower.Tower;


public class TowerTesting {


@Test
public void testIceTowerAttack() {
    Tower iceTower = new IceTower(0,50);
    Tower iceTowerB = new IceTower(100,100);
    Monster[] inRangeMonsters = new Monster[5];
    inRangeMonsters[0] = new Fox(0);
    Monster[] outRangeMonsters = new Monster[5];
    outRangeMonsters[0] = new Fox(0);
    iceTower.attack(inRangeMonsters);
    iceTowerB.attack(outRangeMonsters);
    inRangeMonsters[2] = new Fox(0);
    inRangeMonsters[1] = new Fox(0);
    for (int i = 0; i < 24; ++i)
        inRangeMonsters[2].move();
    iceTower.attack(inRangeMonsters);
}

@Test
public void testBasicTowerAttack() {
    Tower basicTower = new BasicTower(0,50);
    Tower basicTowerB = new BasicTower(100,100);
    Monster[] inRangeMonsters = new Monster[5];
    inRangeMonsters[0] = new Fox(0);
    Monster[] outRangeMonsters = new Monster[5];
    outRangeMonsters[0] = new Fox(0);
    basicTower.attack(inRangeMonsters);
    basicTowerB.attack(outRangeMonsters);
    inRangeMonsters[2] = new Fox(0);
    inRangeMonsters[1] = new Fox(0);
    for (int i = 0; i < 24; ++i)
        inRangeMonsters[2].move();
    basicTower.attack(inRangeMonsters);
}

@Test
public void testCatapultTowerAttack() {
    Tower catapultTower = new CatapultTower(0,51);
    Tower catapultTowerB = new CatapultTower(400,400);
    Tower catapultTowerC = new CatapultTower(0,0);
    Monster[] inRangeMonsters = new Monster[5];
    inRangeMonsters[0] = new Fox(0);
    Monster[] outRangeMonsters = new Monster[5];
    outRangeMonsters[0] = new Fox(0);
    catapultTower.attack(inRangeMonsters);
    catapultTowerB.attack(outRangeMonsters);
    catapultTowerC.attack(outRangeMonsters);
    inRangeMonsters[2] = new Fox(0);
    inRangeMonsters[1] = new Fox(0);
    for (int i = 0; i < 24; ++i)
        inRangeMonsters[2].move();
    catapultTower.attack(inRangeMonsters);
}

@Test
public void testLaserTowerAttack() {
    Tower laserTower = new LaserTower(0,100);
    Tower laserTowerB = new LaserTower(400,400);
    Monster[] inRangeMonsters = new Monster[5];
    inRangeMonsters[0] = new Fox(0);
    Monster[] outRangeMonsters = new Monster[5];
    outRangeMonsters[0] = new Fox(0);
    laserTower.attack(inRangeMonsters);
    laserTowerB.attack(outRangeMonsters);
    inRangeMonsters[2] = new Fox(0);
    inRangeMonsters[1] = new Fox(0);
    for (int i = 0; i < 24; ++i)
        inRangeMonsters[2].move();
    laserTower.attack(inRangeMonsters);
}
}