import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  allCategories?: Maybe<Array<Maybe<Category>>>;
  allIngredients?: Maybe<Array<Maybe<Ingredient>>>;
  latestMeals?: Maybe<Array<Maybe<Meal>>>;
  mealByID?: Maybe<Meal>;
  mealByName?: Maybe<Meal>;
  mealsByArbitraryString?: Maybe<Array<Maybe<Meal>>>;
  mealsByArea?: Maybe<Array<Maybe<Meal>>>;
  mealsByCategory?: Maybe<Array<Maybe<Meal>>>;
  mealsByFirstLetter?: Maybe<Array<Maybe<Meal>>>;
  mealsByIngredients?: Maybe<Array<Maybe<Meal>>>;
  mealsByMainIngredient?: Maybe<Array<Maybe<Meal>>>;
  randomMeal?: Maybe<Meal>;
  randomMealSelection?: Maybe<Array<Maybe<Meal>>>;
};


export type QueryMealByIdArgs = {
  id: Scalars['Int'];
};


export type QueryMealByNameArgs = {
  name: Scalars['String'];
};


export type QueryMealsByArbitraryStringArgs = {
  str: Scalars['String'];
};


export type QueryMealsByAreaArgs = {
  area: Area;
};


export type QueryMealsByCategoryArgs = {
  category: Scalars['String'];
};


export type QueryMealsByFirstLetterArgs = {
  letter: Scalars['String'];
};


export type QueryMealsByIngredientsArgs = {
  ingredients?: Maybe<Array<Scalars['String']>>;
};


export type QueryMealsByMainIngredientArgs = {
  mainIngredient: Scalars['String'];
};


export type QueryRandomMealArgs = {
  id: Scalars['Int'];
};


export type QueryRandomMealSelectionArgs = {
  id: Scalars['Int'];
};

export type Meal = {
  __typename?: 'Meal';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  drinkAlternate?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['String']>;
  instructions?: Maybe<Array<Maybe<Scalars['String']>>>;
  thumbnail?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  youtube?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<MeasuredIngredient>>>;
  source?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  id: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
};

export type MeasuredIngredient = {
  __typename?: 'MeasuredIngredient';
  name?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
};

export enum Area {
  American = 'AMERICAN',
  British = 'BRITISH',
  Canadian = 'CANADIAN',
  Chinese = 'CHINESE',
  Dutch = 'DUTCH',
  Egyptian = 'EGYPTIAN',
  French = 'FRENCH',
  Greek = 'GREEK',
  Indian = 'INDIAN',
  Irish = 'IRISH',
  Italian = 'ITALIAN',
  Jamaican = 'JAMAICAN',
  Japanese = 'JAPANESE',
  Kenyan = 'KENYAN',
  Malaysian = 'MALAYSIAN',
  Mexican = 'MEXICAN',
  Moroccan = 'MOROCCAN',
  Russian = 'RUSSIAN',
  Spanish = 'SPANISH',
  Thai = 'THAI',
  Tunisian = 'TUNISIAN',
  Turkish = 'TURKISH',
  Unknown = 'UNKNOWN',
  Vietnamese = 'VIETNAMESE'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type MealTileQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MealTileQuery = (
  { __typename?: 'Query' }
  & { mealByID?: Maybe<(
    { __typename?: 'Meal' }
    & MealTileFragment
  )> }
);

export type SearchForMealsQueryVariables = Exact<{
  str: Scalars['String'];
}>;


export type SearchForMealsQuery = (
  { __typename?: 'Query' }
  & { mealsByArbitraryString?: Maybe<Array<Maybe<(
    { __typename?: 'Meal' }
    & MealTileFragment
  )>>> }
);

export type MealTileFragment = (
  { __typename?: 'Meal' }
  & Pick<Meal, 'id' | 'name' | 'thumbnail'>
);

export type MealDetailQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MealDetailQuery = (
  { __typename?: 'Query' }
  & { mealByID?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'name' | 'category' | 'area' | 'thumbnail' | 'youtube' | 'instructions'>
    & { ingredients?: Maybe<Array<Maybe<(
      { __typename?: 'MeasuredIngredient' }
      & Pick<MeasuredIngredient, 'name' | 'amount'>
    )>>> }
  )> }
);

export const MealTileFragmentDoc = gql`
    fragment MealTile on Meal {
  id
  name
  thumbnail
}
    `;
export const MealTileDocument = gql`
    query MealTile($id: Int!) {
  mealByID(id: $id) {
    ...MealTile
  }
}
    ${MealTileFragmentDoc}`;

/**
 * __useMealTileQuery__
 *
 * To run a query within a React component, call `useMealTileQuery` and pass it any options that fit your needs.
 * When your component renders, `useMealTileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMealTileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMealTileQuery(baseOptions?: Apollo.QueryHookOptions<MealTileQuery, MealTileQueryVariables>) {
        return Apollo.useQuery<MealTileQuery, MealTileQueryVariables>(MealTileDocument, baseOptions);
      }
export function useMealTileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MealTileQuery, MealTileQueryVariables>) {
          return Apollo.useLazyQuery<MealTileQuery, MealTileQueryVariables>(MealTileDocument, baseOptions);
        }
export type MealTileQueryHookResult = ReturnType<typeof useMealTileQuery>;
export type MealTileLazyQueryHookResult = ReturnType<typeof useMealTileLazyQuery>;
export type MealTileQueryResult = Apollo.QueryResult<MealTileQuery, MealTileQueryVariables>;
export const SearchForMealsDocument = gql`
    query SearchForMeals($str: String!) {
  mealsByArbitraryString(str: $str) {
    ...MealTile
  }
}
    ${MealTileFragmentDoc}`;

/**
 * __useSearchForMealsQuery__
 *
 * To run a query within a React component, call `useSearchForMealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchForMealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchForMealsQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useSearchForMealsQuery(baseOptions?: Apollo.QueryHookOptions<SearchForMealsQuery, SearchForMealsQueryVariables>) {
        return Apollo.useQuery<SearchForMealsQuery, SearchForMealsQueryVariables>(SearchForMealsDocument, baseOptions);
      }
export function useSearchForMealsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchForMealsQuery, SearchForMealsQueryVariables>) {
          return Apollo.useLazyQuery<SearchForMealsQuery, SearchForMealsQueryVariables>(SearchForMealsDocument, baseOptions);
        }
export type SearchForMealsQueryHookResult = ReturnType<typeof useSearchForMealsQuery>;
export type SearchForMealsLazyQueryHookResult = ReturnType<typeof useSearchForMealsLazyQuery>;
export type SearchForMealsQueryResult = Apollo.QueryResult<SearchForMealsQuery, SearchForMealsQueryVariables>;
export const MealDetailDocument = gql`
    query MealDetail($id: Int!) {
  mealByID(id: $id) {
    name
    category
    area
    thumbnail
    youtube
    instructions
    ingredients {
      name
      amount
    }
  }
}
    `;

/**
 * __useMealDetailQuery__
 *
 * To run a query within a React component, call `useMealDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useMealDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMealDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMealDetailQuery(baseOptions?: Apollo.QueryHookOptions<MealDetailQuery, MealDetailQueryVariables>) {
        return Apollo.useQuery<MealDetailQuery, MealDetailQueryVariables>(MealDetailDocument, baseOptions);
      }
export function useMealDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MealDetailQuery, MealDetailQueryVariables>) {
          return Apollo.useLazyQuery<MealDetailQuery, MealDetailQueryVariables>(MealDetailDocument, baseOptions);
        }
export type MealDetailQueryHookResult = ReturnType<typeof useMealDetailQuery>;
export type MealDetailLazyQueryHookResult = ReturnType<typeof useMealDetailLazyQuery>;
export type MealDetailQueryResult = Apollo.QueryResult<MealDetailQuery, MealDetailQueryVariables>;