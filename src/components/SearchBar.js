import { Input } from 'antd'

const Search = Input.Search

const Searchbar =({onSearch}) =>(
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="small"
      onSearch={value => onSearch(value)}
   />
)

export default Searchbar