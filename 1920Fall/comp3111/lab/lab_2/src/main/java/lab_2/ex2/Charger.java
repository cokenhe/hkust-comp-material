package lab_2.ex2;

interface Chargeable {
    public void charge();
}

/**
 * Charger
 */
public class Charger {
    public void charge(Chargeable c) {
        c.charge();
    }
}