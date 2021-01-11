// Scrapbox redirect rule
   app.get(/\/scrapbox\/(.+)/, (req, res) => {
     logger.info('on /scrapbox req.params', req.params);
     // Get Scrapbox title
     const title: string = req.params[0];
     // Redirect to Scrapbox
     res.redirect(301, `https://scrapbox.io/Ueda-desk/${encodeURIComponent(title)}`);
   });