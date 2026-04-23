import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
  symbol: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !symbol) {
        return;
    }

    // Clean up previous widget if symbol changes
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
      "symbols": [
        [
          "${symbol}|1D"
        ]
      ],
      "chartOnly": true,
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "colorTheme": "dark",
      "autosize": true,
      "showVolume": false,
      "showMA": false,
      "hideDateRanges": true,
      "hideMarketStatus": true,
      "hideSymbolLogo": true,
      "scalePosition": "no",
      "scaleMode": "Normal",
      "fontFamily": "Inter, sans-serif",
      "fontSize": "10",
      "noTimeScale": true,
      "valuesTracking": "1",
      "changeMode": "price-and-percent",
      "chartType": "area",
      "maLineColor": "#0AFF0A",
      "maLineWidth": 1,
      "maLength": 9,
      "lineColor": "#0AFF0A",
      "topColor": "rgba(10, 255, 10, 0.4)",
      "bottomColor": "rgba(10, 255, 10, 0)",
      "backgroundColor": "rgba(0, 0, 0, 0)",
      "widgetFontColor": "rgba(255, 255, 255, 0.8)",
      "lineWidth": 2,
      "lineType": 0,
      "dateRanges": [
        "12m|1D"
      ]
    }`;

    container.current.appendChild(script);
    
  }, [symbol]);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
    </div>
  );
};

export default memo(TradingViewWidget);
