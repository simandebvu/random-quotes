import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote } from '../actions/fetchQuote';

const QuoteBox = () => {
  const { quote } = useSelector((state => state.Quote));
  const dispatch = useDispatch();
  const handleChangeQuote = event => {
    event.preventDefault();
    dispatch(fetchQuote());
  };
  const openURL = url => {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  };

  const handleShareTumblr = () => {
    openURL(`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,hiresimandebvu&caption=${encodeURIComponent(quote.quote)}&content=${encodeURIComponent(quote.author)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`);
  };

  const handleShareTwitter = () => {
    openURL(`https://twitter.com/intent/tweet?hashtags=quotes&related=hiresimandebvu&text=${encodeURIComponent(`"${quote.quote}" ${quote.author}`)}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 mb-3">
          <div className="card w-100 mx-auto">
            <div className="card-header">
              Quote
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>
                  {quote.quote}
                  {' '}
                </p>
                <footer className="blockquote-footer">
                  Quotation By
                  {' '}
                  <cite title="Source Title">{quote.author}</cite>
                </footer>
              </blockquote>
            </div>
            <div className="row">
              <input className="button col-sm-2 btn my-4 btn-primary mx-auto" type="button" id="new-quote" value="Tweet" onClick={handleShareTwitter} />
              <input className="button col-sm-2 btn my-4 btn-danger mx-auto" type="button" id="new-quote" value="Tumble" onClick={handleShareTumblr} />
              <input className="button col-sm-2 btn my-4 btn-success mx-auto" type="button" id="new-quote" value="Next!" onClick={handleChangeQuote} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
