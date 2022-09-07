import java.util.*;
import java.util.HashMap;

public class MainMap {
    public static void main(String[] args) {
        int[] nums = new int[] { 1, 2, 2, 3, 1 };
        String s = "aabbcc";
        int k = 2;
        System.out.println(perfectSubstring(s, k));

        s = "aabccc";
        k = 2;
        System.out.println(perfectSubstring(s, k));


        // findShortestSubArray(nums);

    }

    /**
     * Returns the number of perfect substrings in the given string for the
     * specified value of k
     * 
     * @param s The string to check for perfect substrings
     * @param k The number of times every element should occur within the substring
     * @return int The number of perfect substrings
     */
    public static int perfectSubstring(String s, int k) {

        int finalCount = 0;

        /*
         * Set the initial starting index for the subarray as 0, and increment it with
         * every iteration, till the last index of the string is reached.
         */
        for (int start = 0; start < s.length(); start++) {

            /*
             * Use a HashMap to store the count of every character in the subarray. We'll
             * start with an empty map everytime we update the starting index
             */
            Map<Character, Integer> frequencyMap = new HashMap<>();

            /*
             * Set the initial ending index for the subarray equal to the starting index and
             * increment it with every iteration, till the last index of the string is
             * reached.
             */
            for (int end = start; end < s.length(); end++) {
                /*
                 * Get the count of the character at end index and increase it by 1. If the
                 * character is not present in the map, use 0 as the default count
                 */
                char c = s.charAt(end);
                int count = frequencyMap.getOrDefault(c, 0);
                frequencyMap.put(c, count + 1);

                /*
                 * Check if the length of the subarray equals the desired length. The desired
                 * length is the number of unique characters we've seen so far (size of the map)
                 * multilied by k (the number of times each character should occur). If the
                 * length is as per requiremets, check if each element occurs exactly k times
                 */
                if (frequencyMap.size() * k == (end - start + 1)) {
                    if (check(frequencyMap, k)) {
                        finalCount++;
                    }
                }
            }
        }
        return finalCount;
    }

    /**
     * Returns true if every value in the map is equal to k
     * 
     * @param map The map whose values are to be checked
     * @param k   The required value for keys in the map
     * @return true if every value in the map is equal to k
     */
    public static boolean check(Map<Character, Integer> map, int k) {
        /*
         * Iterate through all the values (frequency of each character), comparing them
         * with k
         */
        for (Integer i : map.values()) {
            if (i != k) {
                return false;
            }
        }
        return true;
    }

    public static int findShortestSubArray(int[] nums) {
        Map<Integer, Integer> left = new HashMap<>(),
                right = new HashMap<>(), count = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int x = nums[i];
            if (left.get(x) == null) {

                left.put(x, i);
            }
            System.out.println("left " + left.get(x));

            System.out.println("right " + right.get(x));

            right.put(x, i);
            count.put(x, count.getOrDefault(x, 0) + 1);
        }

        int ans = nums.length;
        int degree = Collections.max(count.values());
        for (int x : count.keySet()) {
            if (count.get(x) == degree) {
                ans = Math.min(ans, right.get(x) - left.get(x) + 1);
            }
        }
        return ans;
    }
}