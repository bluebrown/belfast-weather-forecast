# Belfast Weather Forecast

Simple page to show 5 day weather forecast for Belfast. It is fetching the data from <https://www.metaweather.com/>.

See the demo in action here <https://weather.rainbowstack.dev/>.

## Setup

```console
git clone https://github.com/bluebrown/belfast-weather-forecast
cd belfast-weather-forecast && npm i
```

Note that code is connecting to a cloudflare worker rather than the actual API. This is due to CORS restrictions. If you want to change this behavior, change the variable in the *src/index.js*

```javascript
const host = 'https://weather-proxy.rainbowstack.workers.dev';
```

You can see the worker code here <https://github.com/bluebrown/weather-proxy>.

## Build

The build command will only compile the tailwind css file, and put it into the *public* folder. The public folder is then ready to be served.

```console
npm run build
```

## Deployment

Since this is a static page, the public folder can be deployed anywhere. The workflow in this repo is configured to deploy to a `S3 bucket` in linode, if the correct access keys are provided.

If you don't want to deploy to s3 you can disable the workflow or adjust it accordingly.

```yml
  uses: s3-actions/s3cmd@v1.1
  with:
    region: 'eu-central-1'
    access_key: ${{ secrets.S3_ACCESS_KEY }}
    secret_key: ${{ secrets.S3_SECRET_KEY }}
- name: sync website
  run: s3cmd sync --recursive --acl-public dist/ s3://${{ secrets.S3_DIST_BUCKET }}
```
