export default function settings(listLength) {
    return {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: listLength < 4 ? listLength : 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        cssEase: 'linear',
        dots: 'none',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
}
