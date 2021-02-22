import { useQuery, gql } from "@apollo/client";
import { connect } from "react-redux";

const ALL_CATEGORYS = gql`
  query {
    categories {
      id
      name
      description
      state
    }
  }
`;

const MUTATION_NAME_CATEGORYS = gql`
  mutation {
    updateCategory(updateCategoryInput: { id: 1, name: "Ent" }) {
      id
      name
    }
  }
`;

const AllListQueryMenu = SaveDataMenuSetupFromDB => {
  const { data, loading, error } = useQuery(ALL_CATEGORYS);
  const categorys = data;
  const { data, loading, error } = useQuery(ALL_CATEGORYS);
  const categorys = data;
  const { data, loading, error } = useQuery(ALL_CATEGORYS);
  const categorys = data;
};

const AllListMutationCategorys = () => {};

const mapStateToProps = state => ({
  id_food: state.id_food,
  id_category: state.id_category
});

const mapDispatchToProps = dispatch => ({
  SaveDataMenuSetupFromDB(d) {
    dispatch({
      type: "SELECT_CATEGORY",
      id_category: d.id,
      id_food: 0
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AllListQueryMenu,
  AllListMutationCategorys
);
