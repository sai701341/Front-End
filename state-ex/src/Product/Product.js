import React from "react";
class Product extends React.Component{
    state={
        name:'Iphone-12-pro Max',
        image:'https://www.bing.com/images/search?view=detailV2&ccid=Fcuws8Fm&id=4EA67E12C0DE95B356541F307EB3C1850BB90AA4&thid=OIP.Fcuws8FmwdfsPpFQ5Fal3QHaHa&mediaurl=https%3a%2f%2fmlah2lfpvnde.i.optimole.com%2foe6VtJ4-2dbF8Ivd%2fw%3aauto%2fh%3aauto%2fq%3a55%2fhttps%3a%2f%2forizone.pk%2fwp-content%2fuploads%2f2021%2f04%2fxiaomi-poco-x3-pro-pakistan-priceoye-wsfse.png&exph=1200&expw=1200&q=poco+x3+pro+image&simid=607996580256374716&FORM=IRPRST&ck=B89A2C3434BA36DAD288EC6A36C8887C&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0',
        price:19990,
        qty:1
    }

    render(){
        return <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="table">
                        <thead className="bg-primary text-white">
                            <tr>
                                <td>Name</td>
                                <td>Image</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.name}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          

        </div>
    }
}
export default Product