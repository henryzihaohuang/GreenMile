import React from 'react';

class News extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchNews("GME");
    }

    render(){

        if (Object.values(this.props.entities.news).length === 0) {
            return null;
        };

        const news = this.props.entities.news
        // debugger
        const img = `${news[0].image}`
        const img1 = `${news[1].image}`
        const img2 = `${news[2].image}`

        return(

        <section className="portfolio-news-wrapper">
            <div className="portfolio-news-element-header">
                <span>News</span>
            </div>

            <div className="portfolio-news-block">
                <div className="portfolio-news-element">
                    <div className="portfolio-news-element-body">
                        <span className="news-source-text">
                            {news[0].source}
                        </span>
                        <span className="news-headline-text">
                            {news[0].headline}
                        </span>
                        <span className="news-summary-text">
                            {news[0].summary}
                        </span>
                    </div>
                    <div className="portfolio-news-element-img">
                        <div>
                                <img className="news-img" src={img} />
                        </div>
                    </div>
                </div>


                <div className="portfolio-news-element">
                    <div className="portfolio-news-element-body">
                        <span className="news-source-text">
                            {news[1].source}
                        </span>
                        <span className="news-headline-text">
                            {news[1].headline}
                        </span>
                        <span className="news-summary-text">
                            {news[1].summary}
                        </span>
                    </div>
                    <div className="portfolio-news-element-img">
                        <div>
                                <img className="news-img" src={img1} />
                        </div>
                    </div>
                </div>


                <div className="portfolio-news-element">
                    <div className="portfolio-news-element-body">
                        <span className="news-source-text">
                            {news[2].source}
                        </span>
                        <span className="news-headline-text">
                            {news[2].headline}
                        </span>
                        <span className="news-summary-text">
                            {news[2].summary}
                        </span>
                    </div>
                    <div className="portfolio-news-element-img">
                        <div>
                                <img className="news-img" src={img2} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default News;