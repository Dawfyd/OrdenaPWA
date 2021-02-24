import { useQuery } from "@apollo/client";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import ListAll from "./list_all.jsx";

const ALL_CATEGORYS = graphql(gql`
  query {
    categories(
      findAllCategoriesInput: { companyUuid: "f9U4JIdp6RKKvPCeAkhr_" }
    ) {
      id
      name
      description
      avaliable
    }
  }
`);

const ListCategorysDB = ALL_CATEGORYS(ListAll);

const mapStateToProps = state => ({
  id_food: state.id_food,
  id_category: state.id_category
});

const mapDispatchToProps = dispatch => ({
  SaveDataMenuSetupFromDB(categorys) {
    dispatch({
      type: "RECEIVE_CATEGORYS_DB",
      db_categorys: categorys
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCategorysDB);
