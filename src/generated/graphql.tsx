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
  mealByName?: Maybe<Meal>;
  mealsByFirstLetter?: Maybe<Array<Maybe<Meal>>>;
  mealByID?: Maybe<Meal>;
  randomMeal?: Maybe<Meal>;
  randomMealSelection?: Maybe<Array<Maybe<Meal>>>;
  allCategories?: Maybe<Array<Maybe<Category>>>;
  allIngredients?: Maybe<Array<Maybe<Ingredient>>>;
  latestMeals?: Maybe<Array<Maybe<Meal>>>;
  mealsByMainIngredient?: Maybe<Array<Maybe<Meal>>>;
  mealsByIngredients?: Maybe<Array<Maybe<Meal>>>;
  mealsByCategory?: Maybe<Array<Maybe<Meal>>>;
  mealsByArea?: Maybe<Array<Maybe<Meal>>>;
};


export type QueryMealByNameArgs = {
  name: Scalars['String'];
};


export type QueryMealsByFirstLetterArgs = {
  letter: Scalars['String'];
};


export type QueryMealByIdArgs = {
  id: Scalars['Int'];
};


export type QueryRandomMealArgs = {
  id: Scalars['Int'];
};


export type QueryRandomMealSelectionArgs = {
  id: Scalars['Int'];
};


export type QueryMealsByMainIngredientArgs = {
  mainIngredient: Scalars['String'];
};


export type QueryMealsByIngredientsArgs = {
  ingredients?: Maybe<Array<Scalars['String']>>;
};


export type QueryMealsByCategoryArgs = {
  category: Scalars['String'];
};


export type QueryMealsByAreaArgs = {
  area: Area;
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


export type MealCardQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MealCardQuery = (
  { __typename?: 'Query' }
  & { mealByID?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'name' | 'thumbnail'>
  )> }
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

export type CarouselImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type CarouselImagesQuery = (
  { __typename?: 'Query' }
  & { image1?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'thumbnail'>
  )>, image2?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'thumbnail'>
  )>, image3?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'thumbnail'>
  )> }
);

export type AboutPageImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageImagesQuery = (
  { __typename?: 'Query' }
  & { image1?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'thumbnail'>
  )>, image2?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'thumbnail'>
  )> }
);

export type GetSampleMealDetailQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleMealDetailQuery = (
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

export type GetSampleMealCardInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleMealCardInfoQuery = (
  { __typename?: 'Query' }
  & { item1?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'name' | 'thumbnail'>
  )>, item2?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'name' | 'thumbnail'>
  )>, item3?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'name' | 'thumbnail'>
  )>, item4?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'name' | 'thumbnail'>
  )>, item5?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'name' | 'thumbnail'>
  )>, item6?: Maybe<(
    { __typename?: 'Meal' }
    & Pick<Meal, 'name' | 'thumbnail'>
  )> }
);


export const MealCardDocument = gql`
    query MealCard($id: Int!) {
  mealByID(id: $id) {
    name
    thumbnail
  }
}
    `;

/**
 * __useMealCardQuery__
 *
 * To run a query within a React component, call `useMealCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useMealCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMealCardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMealCardQuery(baseOptions?: Apollo.QueryHookOptions<MealCardQuery, MealCardQueryVariables>) {
        return Apollo.useQuery<MealCardQuery, MealCardQueryVariables>(MealCardDocument, baseOptions);
      }
export function useMealCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MealCardQuery, MealCardQueryVariables>) {
          return Apollo.useLazyQuery<MealCardQuery, MealCardQueryVariables>(MealCardDocument, baseOptions);
        }
export type MealCardQueryHookResult = ReturnType<typeof useMealCardQuery>;
export type MealCardLazyQueryHookResult = ReturnType<typeof useMealCardLazyQuery>;
export type MealCardQueryResult = Apollo.QueryResult<MealCardQuery, MealCardQueryVariables>;
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
export const CarouselImagesDocument = gql`
    query CarouselImages {
  image1: mealByID(id: 52915) {
    thumbnail
  }
  image2: mealByID(id: 52852) {
    thumbnail
  }
  image3: mealByID(id: 52935) {
    thumbnail
  }
}
    `;

/**
 * __useCarouselImagesQuery__
 *
 * To run a query within a React component, call `useCarouselImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarouselImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarouselImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCarouselImagesQuery(baseOptions?: Apollo.QueryHookOptions<CarouselImagesQuery, CarouselImagesQueryVariables>) {
        return Apollo.useQuery<CarouselImagesQuery, CarouselImagesQueryVariables>(CarouselImagesDocument, baseOptions);
      }
export function useCarouselImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarouselImagesQuery, CarouselImagesQueryVariables>) {
          return Apollo.useLazyQuery<CarouselImagesQuery, CarouselImagesQueryVariables>(CarouselImagesDocument, baseOptions);
        }
export type CarouselImagesQueryHookResult = ReturnType<typeof useCarouselImagesQuery>;
export type CarouselImagesLazyQueryHookResult = ReturnType<typeof useCarouselImagesLazyQuery>;
export type CarouselImagesQueryResult = Apollo.QueryResult<CarouselImagesQuery, CarouselImagesQueryVariables>;
export const AboutPageImagesDocument = gql`
    query AboutPageImages {
  image1: mealByID(id: 52833) {
    thumbnail
  }
  image2: mealByID(id: 52963) {
    thumbnail
  }
}
    `;

/**
 * __useAboutPageImagesQuery__
 *
 * To run a query within a React component, call `useAboutPageImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutPageImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutPageImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAboutPageImagesQuery(baseOptions?: Apollo.QueryHookOptions<AboutPageImagesQuery, AboutPageImagesQueryVariables>) {
        return Apollo.useQuery<AboutPageImagesQuery, AboutPageImagesQueryVariables>(AboutPageImagesDocument, baseOptions);
      }
export function useAboutPageImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutPageImagesQuery, AboutPageImagesQueryVariables>) {
          return Apollo.useLazyQuery<AboutPageImagesQuery, AboutPageImagesQueryVariables>(AboutPageImagesDocument, baseOptions);
        }
export type AboutPageImagesQueryHookResult = ReturnType<typeof useAboutPageImagesQuery>;
export type AboutPageImagesLazyQueryHookResult = ReturnType<typeof useAboutPageImagesLazyQuery>;
export type AboutPageImagesQueryResult = Apollo.QueryResult<AboutPageImagesQuery, AboutPageImagesQueryVariables>;
export const GetSampleMealDetailDocument = gql`
    query GetSampleMealDetail {
  mealByID(id: 52915) {
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
 * __useGetSampleMealDetailQuery__
 *
 * To run a query within a React component, call `useGetSampleMealDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSampleMealDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSampleMealDetailQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSampleMealDetailQuery(baseOptions?: Apollo.QueryHookOptions<GetSampleMealDetailQuery, GetSampleMealDetailQueryVariables>) {
        return Apollo.useQuery<GetSampleMealDetailQuery, GetSampleMealDetailQueryVariables>(GetSampleMealDetailDocument, baseOptions);
      }
export function useGetSampleMealDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSampleMealDetailQuery, GetSampleMealDetailQueryVariables>) {
          return Apollo.useLazyQuery<GetSampleMealDetailQuery, GetSampleMealDetailQueryVariables>(GetSampleMealDetailDocument, baseOptions);
        }
export type GetSampleMealDetailQueryHookResult = ReturnType<typeof useGetSampleMealDetailQuery>;
export type GetSampleMealDetailLazyQueryHookResult = ReturnType<typeof useGetSampleMealDetailLazyQuery>;
export type GetSampleMealDetailQueryResult = Apollo.QueryResult<GetSampleMealDetailQuery, GetSampleMealDetailQueryVariables>;
export const GetSampleMealCardInfoDocument = gql`
    query GetSampleMealCardInfo {
  item1: mealByID(id: 52915) {
    name
    thumbnail
  }
  item2: mealByID(id: 52923) {
    name
    thumbnail
  }
  item3: mealByID(id: 52990) {
    name
    thumbnail
  }
  item4: mealByID(id: 52900) {
    name
    thumbnail
  }
  item5: mealByID(id: 52993) {
    name
    thumbnail
  }
  item6: mealByID(id: 52954) {
    name
    thumbnail
  }
}
    `;

/**
 * __useGetSampleMealCardInfoQuery__
 *
 * To run a query within a React component, call `useGetSampleMealCardInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSampleMealCardInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSampleMealCardInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSampleMealCardInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetSampleMealCardInfoQuery, GetSampleMealCardInfoQueryVariables>) {
        return Apollo.useQuery<GetSampleMealCardInfoQuery, GetSampleMealCardInfoQueryVariables>(GetSampleMealCardInfoDocument, baseOptions);
      }
export function useGetSampleMealCardInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSampleMealCardInfoQuery, GetSampleMealCardInfoQueryVariables>) {
          return Apollo.useLazyQuery<GetSampleMealCardInfoQuery, GetSampleMealCardInfoQueryVariables>(GetSampleMealCardInfoDocument, baseOptions);
        }
export type GetSampleMealCardInfoQueryHookResult = ReturnType<typeof useGetSampleMealCardInfoQuery>;
export type GetSampleMealCardInfoLazyQueryHookResult = ReturnType<typeof useGetSampleMealCardInfoLazyQuery>;
export type GetSampleMealCardInfoQueryResult = Apollo.QueryResult<GetSampleMealCardInfoQuery, GetSampleMealCardInfoQueryVariables>;