package monster;

public class Unicorn extends Monster {
    /**
     * constructor of Unicorn
     * @param no_of_frame the  current number if frames, used to spwan a stronger Unicorn 
     */
    public Unicorn(int no_of_frame) {
        icon = "unicorn.png";
        reward = 1 + no_of_frame / 10;
        hp = 13 + no_of_frame / 3;
        speed = 1 + no_of_frame / 10; // every 10 frame speed++
    }

}