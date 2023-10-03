import { Blog } from './Blog'

export function BlogRecursos () {
    return (
        <div>
            <div>
                <h2>Blog</h2>
            </div>
            <Blog/>
            <hr/>
            <div className="row">
                <h2>Recursos</h2>
                <div className="card col-lg-4 col-md-4 col-sm-6 row-gap-4">
                    <a href="https://drive.google.com/file/d/1yfr1umWujIz2jrpar29y_PZJKWNwaR3H/view" className="img-fluid img-thumbnail ">
                        <img src="https://images.cdn1.buscalibre.com/fit-in/360x360/0f/95/0f9529f98d5e6dc42313b23a54e70599.jpg"></img>
                    </a>
                    <h3 className="card-text">DESARROLLO DEL LENGUAJE</h3>
                    <h4 className="card-text">Robert E. Owens</h4>
                </div>
                <div className="card col-lg-4 col-md-4 col-sm-6 row-gap-4 ">
                    <a href="https://drive.google.com/file/d/1yfr1umWujIz2jrpar29y_PZJKWNwaR3H/view" className="img-fluid img-thumbnail">
                        <img src="https://images.cdn1.buscalibre.com/fit-in/360x360/0f/95/0f9529f98d5e6dc42313b23a54e70599.jpg"></img>
                    </a>
                    <h3 className="card-text">DESARROLLO DEL LENGUAJE</h3>
                    <h4 className="card-text">Robert E. Owens</h4>
                </div>
                <div className="card col-lg-4 col-md-4 col-sm-6 row-gap-4 ">
                    <a href="https://drive.google.com/file/d/1yfr1umWujIz2jrpar29y_PZJKWNwaR3H/view" className="img-fluid img-thumbnail">
                        <img src="https://images.cdn1.buscalibre.com/fit-in/360x360/0f/95/0f9529f98d5e6dc42313b23a54e70599.jpg"></img>
                    </a>
                    <h3 className="card-text">DESARROLLO DEL LENGUAJE</h3>
                    <h4 className="card-text">Robert E. Owens</h4>
                </div>
            </div>
        </div>
    )
}