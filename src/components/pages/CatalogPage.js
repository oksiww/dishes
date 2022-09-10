
import { Helmet } from "react-helmet";
import DishesList from "../dishesList/DishesList";
import DishesListMore from "../dishesListMore/DishesListMore";


const CatalogPage = () => {
    
    return(
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our dishes"
                />
                <title>Catalog page</title>
            </Helmet>
            <DishesList/>
            <DishesListMore />
        </>
    )
}

export default CatalogPage;