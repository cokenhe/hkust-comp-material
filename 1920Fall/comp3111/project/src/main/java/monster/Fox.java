package monster;

public class Fox extends Monster {
    /**
     * constructor of Fox
     * @param no_of_frame the  current number if frames, used to spwan a stronger fox 
     */
    public Fox(int no_of_frame) {
        reward = 1 + no_of_frame / 10;
        icon = "fox.png";
        hp = 10 + no_of_frame / 5;
        speed = 2 + no_of_frame / 7;
    }

}