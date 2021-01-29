package monster;

public class Penguim extends Monster {
    private int maxHp;
    /**
     * constructor of Penguim
     * @param no_of_frame the  current number if frames, used to spwan a stronger Penguim 
     */
    public Penguim(int no_of_frame) {
        reward = 2 + no_of_frame / 10;
        icon = "penguin.png";
        hp = 8 + no_of_frame / 4;
        maxHp = hp;
        speed = speed + no_of_frame / 10; // every 10 frame speed++
    }
    /**
     * call to hp ++ 
     */
    void replenish() {
        if (hp < maxHp)
            this.hp++;
    }
}