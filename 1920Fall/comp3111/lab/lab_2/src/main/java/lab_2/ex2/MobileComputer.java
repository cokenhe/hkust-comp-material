package lab_2.ex2;

/**
 * MobileComputer
 * 
 * Implementing Chargeable make MobileComputer::charge() must exist
 * so that the Charger is able to charge the Chargeable MobileComputer
 */
public class MobileComputer extends Computer implements Chargeable {
    private int battery;
    
    public MobileComputer() {
        secret = "MobileComputer secret";
        battery = 5;
    }

    @Override
    public void work() {
        if (battery > 0) {
            System.out.println("It is working on my lap.");
            battery--;
        } else 
            System.out.println("Running out of battery");
    }

    @Override
    public void charge() {
        if (battery < 10)
            battery++;
    }
    
}