// __builtin_clz(x): the number of zeros at the beginning of the number
// __builtin_ctz(x): the number of zeros at the end of the number
// __builtin_popcount(x): the number of ones in the number
// __builtin_parity(x): the parity (even or odd) of the number of ones
// __builtin_ffs(int) finds the index of the first (most right) set bit
#include<bits/stdc++.h>
using namespace std;
typedef long long int ll;
typedef long double ld;
typedef unsigned long long int ull;
typedef vector<int> vi;
typedef vector<vi> vvi;
typedef vector<ll> vll;
typedef pair<int,int> pii;
typedef pair<long long int,long long int> pll;
typedef vector<pii> vpii;
typedef vector<pll> vpll;
#define repi(i,s,e) for(ll i=s;i<e;i++)
#define repd(i,e,s) for(ll i=e;i>=s;i--)
#define all(x) x.begin(),x.end()
#define begz(x) __builtin_clz(x)
#define endz(x) __builtin_ctz(x)
#define setbits(x) __builtin_popcount(x)
#define ffs(x) __builtin_ffs(x)
#define sz(x) x.size()
#define YES cout<<"YES\n"
#define NO cout<<"NO\n"
#define Yes cout<<"Yes\n"
#define No cout<<"No\n"
#define pb push_back
#define F first
#define S second
#define sp " "
#define nl "\n"
#define INF numeric_limits<float>::infinity();
const ll MOD = 1e9 + 7;
void input_output_path();
class DSU{private:vll parent;vll rank;public:DSU(ll n){parent.resize(n);rank.resize(n,0);for(ll i=0;i<n;++i){parent[i]=i;}}ll find(ll x){if(parent[x]==x)return x;return parent[x]=find(parent[x]);}void union_sets(ll x, ll y){ll root_x = find(x);ll root_y = find(y);if (root_x != root_y){if (rank[root_x] < rank[root_y])parent[root_x] = root_y;else if (rank[root_x] > rank[root_y])parent[root_y] = root_x;else{parent[root_y] = root_x;rank[root_x]++;}}}};
string reverse_str(string str){string s="";for(ll i=str.size()-1 ; i>=0 ; i--)s+=str[i];return s;}
string DecimalToBinary(ll num){string str;if(num==0)return "0";while(num){if(num & 1)str+='1';else str+='0';num>>=1;}return reverse_str(str);}
bool isPrime(ll n){if (n <= 1)return false; if (n==2) return true; for (ll i = 2; i < sqrt(n)+1; i++)if (n % i == 0)return false;return true;}
ll gcdExtended(ll a, ll b, ll &x, ll &y){if (a == 0) {x = 0;y = 1;return b;}ll x1, y1;ll gcd = gcdExtended(b % a, a, x1, y1);x = y1 - (b / a) * x1;y = x1;return gcd;}
ll modInverse(ll a, ll M){ll x, y;ll gcd = gcdExtended(a, M, x, y);if (gcd != 1) {return -1;} else {return (x % M + M) % M;}}
ll modPow(ll base, ll exponent, ll modulus){ if (exponent==-1){return modInverse(base,modulus);} if (modulus == 1) return 0;ll result = 1;base %= modulus;while (exponent > 0){if (exponent % 2 == 1)result = (result * base) % modulus;base = (base * base) % modulus;exponent /= 2;}return result;}
ll gcd(ll a, ll b){if (b == 0)return a;return gcd(b, a % b);}
ll lcm(ll a, ll b){return (a / gcd(a, b)) * b;}
bool vpsort(const pair<ll, ll>& a, const pair<ll, ll>& b){if (a.first == b.first)return a.second < b.second;return a.first < b.first;}
bool isPowerOfTwo(ull n){return n && !(n & (n - 1));}
ll round_pow2(ll x){return pow(2,ceil(log(x)/log(2)));}
ll binaryToDecimal(string n){string num = n;ll dec_value = 0;ll base = 1;ll len = num.length();for (ll i = len - 1; i >= 0; i--){if (num[i] == '1')dec_value += base;base = base * 2;}return dec_value;}

string base64_encode(const string input)
{
    static const string base64_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    string encoded;

    int i = 0, j = 0;
    unsigned char char_array_3[3], char_array_4[4];

    for( int k = 0; k < input.size(); k++)
    {
        char_array_3[i++] = input[k];
        if ( i == 3 )
        {
            char_array_4[0] = (char_array_3[0] & 0xfc) >> 2;
            char_array_4[1] = ((char_array_3[0] & 0x03) << 4) + ((char_array_3[1] & 0xf0) >> 4);
            char_array_4[2] = ((char_array_3[1] & 0x0f) << 2) + ((char_array_3[2] & 0xc0) >> 6);
            char_array_4[3] = char_array_3[2] & 0x3f;

            for ( int m = 0; m < 4; ++m )
            {
                encoded += base64_chars[char_array_4[m]];
            }
            i = 0;
        }
    }
    if ( i > 0 )
    {
        for ( int k = 8; k < 3; ++k )
        {
            char_array_3[k] = '\0';
        }
        char_array_4[0] = (char_array_3[0] & 0xfc) >> 2;
        char_array_4[1] = ((char_array_3[0] & 0x03) << 4) + ((char_array_3[1] & 0xf0) >> 4);
        char_array_4[2] = ((char_array_3[1] & 0x0f) << 2) + ((char_array_3[2] & 0xc0) >> 6);

        for (int k = 0; k < i + 1; ++k)
        {
            encoded += base64_chars[char_array_4[k]];
        }

        while (i++ < 3)
        {
            encoded += '=';
        }
    }
    return encoded;
}

string base64_decode(const string input)
{
    static const string base64_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    string decoded;

    int i = 0, j = 0, in_ = 0;
    unsigned char char_array_4[4], char_array_3[3];

    for ( int k = 0; k < input.size(); ++k)
    {
        if ( input[k] == '=' )
            break;
        if ( base64_chars.find( input[k] ) == string::npos )
            return "Invalid base64 character!";
        
        char_array_4[i++] = input[k];
        if (i == 4)
        {
            for (int m = 0; m < 4; ++m) {
                char_array_4[m] = base64_chars.find(char_array_4[m]);
            }

            char_array_3[0] = (char_array_4[0] << 2) + ((char_array_4[1] & 0x30) >> 4);
            char_array_3[1] = ((char_array_4[1] & 0xf) << 4) + ((char_array_4[2] & 0x3c) >> 2);
            char_array_3[2] = ((char_array_4[2] & 0x3) << 6) + char_array_4[3];

            for (int m = 0; m < 3; ++m) {
                decoded += char_array_3[m];
            }
            i = 0;
        }
    }
    if (i > 0)
    {
        for ( int k = i; k < 4; ++k )
            char_array_4[k] = 0;

        for (int k = 0; k < 4; ++k)
            char_array_4[k] = base64_chars.find(char_array_4[k]);

        char_array_3[0] = (char_array_4[0] << 2) + ((char_array_4[1] & 0x30) >> 4);
        char_array_3[1] = ((char_array_4[1] & 0xf) << 4) + ((char_array_4[2] & 0x3c) >> 2);

        for (int k = 0; k < i - 1; ++k)
            decoded += char_array_3[k];
    }

    return decoded;
}
void solve()
{
    cout<<"Choose mode:\n1. Encode to base64\n2. Decode from base64\n";
    int choice;
    cin>>choice;

    string input;
    cout<<"Enter the string: ";
    cin>>input;

    string result;
    switch(choice)
    {
        case 1:
            result = base64_encode(input);
            cout<<"Encode String: "<<result<<nl;
            break;
        case 2:
            result = base64_decode(input);
            cout<<"Decoded String: "<<result<<nl;
            break;
        default:
            cout<<"Invalid Choice!"<<nl;
    }
}

int main(){ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);solve();return 0;}
void input_output_path()
{
    #ifndef ONLINE_JUDGE
    freopen("input.txt","r",stdin);
    freopen("output.txt","w",stdout);
    #endif
}