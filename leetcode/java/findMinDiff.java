// Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
// 2 <= timePoints.length <= 2 * 10^4


class FindMinDiff {
    public int findMidDiff(String[] times) {
        int MIN_PER_DAY = 1440;
        Arrays.sort(times);

        int result = Integer.MAX_VALUE;
        int first = toMin(times[0]);
        int prev = first;

        for (int i = 1; i < times.length; i++) {
            int current = toMin(times[idx]);
            result = Math.min(result, current - prev);
        }

        result = Math.min(result, MIN_PER_DAY - (prev - first));

        return result;
    }

    private int toMin(String v) {
        String[] parts = v.split(":");
        int h = Integer.parseInt(parts[0]);
        int m = Integer.parseInt(parts[1]);
        return h * 60 + m
    }
}
