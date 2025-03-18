const Bastu = (props) => {
    if(props.correctDay == new Date().toLocaleString('en-us', {  weekday: 'long' })) {
        return (
            <>
            <p>SAUNAAN SIITÄ SAATNA!</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/28__O2Ngc74?si=hKjkXAOaP6hT--16&amp;start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    } else {
        return (
            <>
            <p>!!!EI VIELÄ!!!</p>
            </>
        )
    }
}

export default Bastu