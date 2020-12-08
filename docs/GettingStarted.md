# Hệ Thống Quản Lý Trang Laven Studio Manager 



## Tổng Quát

Laven Studio Manager là **Phần mềm, trang web quản lý trang** cho các khách hàng của **Laven Studio** với các tính năng giúp quản ý trang bao gồm: Đăng bài, chỉnh sửa trang web, quản lý người dùng, v..v...



## Cách Trang Quản Lý User

Mỗi khi người dùng Login vào **LVM ( Laven Studio Manager )** sau khi thành công, trang sẽ lưu các thông tin vào **Local Storage** bao gồm:

* Json Web Token **( jwt )** : *Dùng để xác thực khi thực hiện POST, GET, DELETE với API*
* User Id **( user_id )** : *Sử dụng trong một vài trường hợp cần đến*
* Email **( email )**
* Project ID **( project_id )** : *Dùng để Route, thực hiện POST, GET, DELETE với API*
* API Domain **( api_domain ) **: *Giá trị để Function POST đến link của API trang web khách hàng*
* Media Domain **( media_domain )** : *Giá trị để thực hiện lấy hình ảnh, các file media từ website của khách*



## Cấu Trúc Files

Mỗi dự án mới sẽ được setup một folder mới bên trong trang Laven Studio Admin Website, bên trong folder **/views/Projects** sẽ có một folder mới với tên là **ID** của dự án. **ID** này sẽ trùng với **ID** của dự án bên trong **CSDL** của trang Laven Studio Admin Website.

``` Cấu Trúc Files
views:
  └── PROJECT_ID:
          ├── views:
          		├── View1.jsx
          		└── View2.jsx
          └── Routes.jsx
```



#### PROJECT_ID:

>  Đây là folder dùng để chứa mọi thứ liên quan đến views, Routes để render lên trang admin, **Mỗi trang quản lý của mỗi dự án sẽ có các views và các routes khác nhau**.



#### VIEWS:

> Đây là folder chứa các views của trang admin



#### Routes.jsx:

> Đây là file điều hướng dùng để điều hướng - liên kết các view đến App.js sau khi người dùng login vào.



## Tạo Một View Mới

Để tạo một view mới đầu tiên hãy tạo một file với cấu trúc: **ten_view.jsx** bên trong folder **views** của dự án. sau đó, viết code bên trong file này và nhớ **export tên view** trùng với tên file để có thể Route đến view này.

``` js
export default ten_view;
```



Sau khi đã có file bên trong folder views, hãy Route đến view này bằng cách chỉnh sửa code bên trong file **Routes.jsx** của dự án:

```react
import ten_view from './views/ten_view'

class Routes extends Component {
    render() {
        let pathname = window.location.pathname.split("/")[3]; {/*Lấy pathname*/}
        if(pathname == 'ten_view') { {/*Route đến trang*/}
            return <ten_view/>
        }

        return(
            <div></div>
        )
    }
}

export default Routes
```



Phần pathname chính là giá trị cần lấy để biết user đang redirect đến trang nào. Sau khi có giá trị này sẽ sử dụng **pathname == 'ten_duong_dan'** để Route đến view của trang.



