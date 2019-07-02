import React  from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
 const Filter = (props) =>  {

    let  { setFilter, filterBy, searchQuery} = props;
        return (
            <Menu vertical>
                <Menu.Item  active={filterBy === 'all'} onClick={setFilter.bind(this, 'all')}>
                    <Label>{props.count}</Label>
                    Все
                </Menu.Item>

                <Menu.Item  active={filterBy === 'popular'} onClick={setFilter.bind(this, 'popular')}>

                    Популярные
                </Menu.Item>

                <Menu.Item  active={filterBy === 'price_high'} onClick={setFilter.bind(this, 'price_high')}>
                    Дорогие книги
                </Menu.Item>
                <Menu.Item  active={filterBy === 'price_low'} onClick={setFilter.bind(this, 'price_low')}>
                    Дешевые книги
                </Menu.Item>
                <Menu.Item  active={filterBy === 'author'} onClick={setFilter.bind(this, 'author')}>
                    Автор
                </Menu.Item>
                <Menu.Item>
                    <Input icon='search' onChange={(e) => {props.setSearch(e.target.value)}} value={searchQuery} placeholder='Search mail...' />
                </Menu.Item>
            </Menu>
        )
};

export default Filter;