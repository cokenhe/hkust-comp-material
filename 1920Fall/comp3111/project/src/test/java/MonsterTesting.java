import org.junit.Assert;
import org.junit.Test;

import monster.Fox;
import monster.Monster;
import monster.Penguim;
import monster.Unicorn;
import tower.IceTower;
import tower.Tower;


public class MonsterTesting {


    @Test
    public void testPenguimUnderAttack() {
        Tower iceTower = new IceTower(0,50);
        Tower iceTowerB = new IceTower(100,100);
        Monster[] inRangeMonsters = new Monster[5];
        inRangeMonsters[0] = new Penguim(0);
        Monster[] outRangeMonsters = new Monster[5];
        outRangeMonsters[0] = new Penguim(0);
        iceTower.attack(inRangeMonsters);
        iceTowerB.attack(outRangeMonsters);
        inRangeMonsters[2] = new Penguim(0);
        inRangeMonsters[1] = new Penguim(0);
        for (int i = 0; i < 50; ++i)
            inRangeMonsters[2].move();
        iceTower.attack(inRangeMonsters);
    }
    @Test
    public void testUnicornUnderAttack() {
        Tower iceTower = new IceTower(0,50);
        Tower iceTowerB = new IceTower(100,100);
        Monster[] inRangeMonsters = new Monster[5];
        inRangeMonsters[0] = new Unicorn(0);
        Monster[] outRangeMonsters = new Monster[5];
        outRangeMonsters[0] = new Unicorn(0);
        iceTower.attack(inRangeMonsters);
        iceTowerB.attack(outRangeMonsters);
        inRangeMonsters[2] = new Unicorn(0);
        inRangeMonsters[1] = new Unicorn(0);
        for (int i = 0; i < 50; ++i)
            inRangeMonsters[2].move();
        iceTower.attack(inRangeMonsters);
    }
    @Test
    public void testFoxUnderAttack() {
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
        Assert.assertEquals(
            inRangeMonsters[1].getSpeed(), 
            inRangeMonsters[2].getSpeed()
            );
        for (int i = 0; i < 50; ++i)
            inRangeMonsters[2].move();
        iceTower.attack(inRangeMonsters);
    }
}