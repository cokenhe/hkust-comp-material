import org.junit.Assert;
import org.junit.Test;

import helper.Location;
/**
 * LocationTest
 */
public class LocationTest {

    @Test
    public void testIsInRange() {
        // 8 shooting directions with 6 test cases each
        Location tower = new Location(0, 0);
        Location monsters[] = {
            new Location(0, 1),
            new Location(1, 1),
            new Location(1, 0),
            new Location(1, -1),

            new Location(0, -1),
            new Location(-1, -1),
            new Location(-1, 0),
            new Location(-1, 1)
        };
        Location testCases[][] = {
            {
                new Location(0, 2), new Location(1, 2), new Location(100, 2), 
                new Location(0, -2), new Location(1, -2), new Location(100, -2)
            },
            {
                new Location(2, 2), new Location(1, 2), new Location(100, 2), 
                new Location(-2, -2), new Location(-1, -2), new Location(-100, -2)
            },
            {
                new Location(2, 0), new Location(2, 1), new Location(2, 100), 
                new Location(-2, 0), new Location(-2, 1), new Location(-2, 100)
            },
            {
                new Location(2, -2), new Location(1, -2), new Location(100, -2), 
                new Location(-2, 2), new Location(-1, 2), new Location(-100, 2)
            },
            {
                new Location(0, -2), new Location(1, -2), new Location(100, -2), 
                new Location(0, 2), new Location(1, 2), new Location(100, 2)
            },
            {
                new Location(-2, -2), new Location(-1, -2), new Location(-100, -2), 
                new Location(2, 2), new Location(1, 2), new Location(100, 2)
            },
            {
                new Location(-2, 0), new Location(-2, 1), new Location(-2, 100), 
                new Location(2, 0), new Location(2, 1), new Location(2, 100)
            },
            {
                new Location(-2, 2), new Location(-1, 2), new Location(-100, 2), 
                new Location(2, -2), new Location(1, -2), new Location(100, -2)
            }
        };

        for (int i = 0; i < monsters.length; i++) {
            Assert.assertEquals(
                String.format("%d, (%d, %d)", i, testCases[i][0].x, testCases[i][0].y) + true, 
                String.format("%d, (%d, %d)", i, testCases[i][0].x, testCases[i][0].y) + testCases[i][0].isInRange(tower, monsters[i])
                );
            Assert.assertEquals(
                String.format("%d, (%d, %d)", i, testCases[i][1].x, testCases[i][1].y) + true, 
                String.format("%d, (%d, %d)", i, testCases[i][1].x, testCases[i][1].y) + testCases[i][1].isInRange(tower, monsters[i])
                );
            Assert.assertEquals(
                String.format("%d, (%d, %d)", i, testCases[i][2].x, testCases[i][2].y) + false, 
                String.format("%d, (%d, %d)", i, testCases[i][2].x, testCases[i][2].y) + testCases[i][2].isInRange(tower, monsters[i])
                );
            Assert.assertEquals(
                String.format("%d, (%d, %d)", i, testCases[i][3].x, testCases[i][3].y) + false, 
                String.format("%d, (%d, %d)", i, testCases[i][3].x, testCases[i][3].y) + testCases[i][3].isInRange(tower, monsters[i])
                );
            Assert.assertEquals(
                String.format("%d, (%d, %d)", i, testCases[i][4].x, testCases[i][4].y) + false, 
                String.format("%d, (%d, %d)", i, testCases[i][4].x, testCases[i][4].y) + testCases[i][4].isInRange(tower, monsters[i])
                );
            Assert.assertEquals(
                String.format("%d, (%d, %d)", i, testCases[i][5].x, testCases[i][5].y) + false, 
                String.format("%d, (%d, %d)", i, testCases[i][5].x, testCases[i][5].y) + testCases[i][5].isInRange(tower, monsters[i])
                );
        }
    }
}