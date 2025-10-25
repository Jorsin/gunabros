

function Breadcrumbs(props) {
    // const [segments, setSegments] = useState([]);

    // useEffect(() => {
    //     var path = props.path;

    //     path = path.charAt(0) === '/' ? path.substring(1) : path;
    //     console.log(path);

    //     var parts = path.split('/');
    //     var items = [];

    //     for(var i=parts.length-1; i>=0; i--){
    //         var link = ""
    //         items.push({name: parts[i], link: ""});
    //     }

    //     setSegments(items);
    // }, [])

    return (
        <div className="Breadcrumbs">
            <div id="breadcrumb-center">
                {props.items.map((item, index) => {
                    console.log("vite");
                    console.log(item.name);
                    return (item.link !== undefined ?
                        <div key={item.name} className="breadcrumb-item transitionInOnload">
                            <span>
                                <a href={item.link}>{item.name}</a>
                            </span>
                            <span>/</span>
                        </div>
                        :
                        <span key={item.name} className="breadcrumb-active transitionInOnload">
                            {item.name}
                        </span>)
                })}

            </div>
        </div>
    );
}


export default Breadcrumbs;