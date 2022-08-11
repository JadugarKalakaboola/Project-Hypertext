import {GraphQLClient, gql} from 'graphql-request'

const graphcms = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/cl6lpqcr10ulm01umhz4ucee6/master")

const QUERY = gql`
  {
    resultsX{
      name,
      class,
      english,
      maths,
      hindi,
      science,
      socialScience,
      studentphoto{
        url
      },
      detailedResult
    },
    resultsXIISc{
      name,
      class,
      english,
      maths,
      physics,
      chemistry,
      computerScience,
      studentphoto{
        url
      },
      detailedResult
    },
    resultsXIICom{
      name,
      class,
      english,
      maths,
      accountancy,
      businessStudies,
      economics,
      studentphoto{
        url
      },
      detailedResult
    },
    resultsXIIHu{
      name,
      class,
      english,
      maths,
      geography,
      politicalScience,
      economics,
      studentphoto{
        url
      },
      detailedResult
    }
  }
`

export async function getStaticProps(){
  const {data} = await graphcms.request(QUERY);
  return{
    props: {
      data,
    }
  };
}

export default function ClassX({data}){

    console.log(data)

    return(
        <div>
            
        </div>
    )
}