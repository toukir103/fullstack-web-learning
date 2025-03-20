#include <bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin >> t;

    while (t--)
    {
        int n, m;
        cin >> n >> m;

        vector<vector<int>> a(n, vector<int>(m));
        int r = 0, c = 0;

        // ইনপুট নেওয়া
        for (int i = 0; i < n; i++)
        {
            string s;
            cin >> s;
            for (int j = 0; j < m; j++)
            {
                a[i][j] = s[j] - '0';
            }
        }

        // প্রতিটি রো-র XOR চেক করা
        for (int i = 0; i < n; i++)
        {
            int xor_sum = 0;
            for (int j = 0; j < m; j++)
            {
                xor_sum ^= a[i][j];
            }
            if (xor_sum == 1)
                r++;
        }

        // প্রতিটি কলাম-র XOR চেক করা
        for (int j = 0; j < m; j++)
        {
            int xor_sum = 0;
            for (int i = 0; i < n; i++)
            {
                xor_sum ^= a[i][j];
            }
            if (xor_sum == 1)
                c++;
        }

        // সর্বোচ্চ r ও c এর মান প্রিন্ট করা
        cout << max(r, c) << "\n";
    }

    return 0;
}
