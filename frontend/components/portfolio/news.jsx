import React from 'react';

class News extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchNews("GME");
        debugger
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
            <span className="portfolio-news-element-header">
                <span>News</span>
            </span>

            <span className="portfolio-news-block">
                <span className="portfolio-news-element">
                    <span className="portfolio-news-element-body">
                        <span className="news-source-text">
                            {news[0].source}
                        </span>
                        <span className="news-headline-text">
                            {news[0].headline}
                        </span>
                        <span className="news-summary-text">
                            {news[0].summary}
                        </span>
                    </span>
                    <span className="portfolio-news-element-img">
                        <span>
                                <img className="news-img" src={img} />
                        </span>
                    </span>
                </span>


                <span className="portfolio-news-element">
                    <span className="portfolio-news-element-body">
                        <span className="news-source-text">
                            {news[1].source}
                        </span>
                        <span className="news-headline-text">
                            {news[1].headline}
                        </span>
                        <span className="news-summary-text">
                            {news[1].summary}
                        </span>
                    </span>
                    <span className="portfolio-news-element-img">
                        <span>
                                <img className="news-img" src={img1} />
                        </span>
                    </span>
                </span>


                <span className="portfolio-news-element">
                    <span className="portfolio-news-element-body">
                        <span className="news-source-text">
                            {news[2].source}
                        </span>
                        <span className="news-headline-text">
                            {news[2].headline}
                        </span>
                        <span className="news-summary-text">
                            {news[2].summary}
                        </span>
                    </span>
                    <span className="portfolio-news-element-img">
                        <span>
                                <img className="news-img" src={img2} />
                        </span>
                    </span>
                </span>
            </span>
        </section>
        )
    }
}

export default News;