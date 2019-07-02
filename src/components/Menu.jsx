import React from 'react';
import {Button, List, Popup, Menu, Image} from 'semantic-ui-react';

const CartComponent = ({title, id, image, removeFromCart}) => (
    <List divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={removeFromCart.bind(this, id)}>Удалить</Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);
const MenuComponents = ({totalPrice, count, items}) => (
    <Menu>
        <Menu.Item name='browse'>
          Магазин Книг
        </Menu.Item>

        <Menu.Item name='submit'>
          обо мне
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='signup'>
           Итого: <b>{totalPrice}</b> сом.
          </Menu.Item>

              <Popup
                trigger = {
                    <Menu.Item name='help'>
                        Корзина (<b>{count}</b>)
                    </Menu.Item>
                }
                content={items.map(book => <CartComponent {...book} />)}
                on='click'
                hideOnScroll
              />
        </Menu.Menu>
      </Menu>
)

export default MenuComponents;