# OSM-Project

## Screenshots

### Initial Screen

![InitialScreen](/public/InitialScreen.png)

### Error Screen

![ErrorScreen](/public/ErrorScreen.png)

### Reponse Screen

![RepsonseScreen](/public/ResponseScreen.png)

## How to get started:

Install node modules with `npm install` and once that is done, get the app started with `npm start`.

## Things that could be improved on:

I believe this project could have greatly benefited from integrating `react-query`. Initially, I was hesitant to introduce more libraries, but react-query offers advantages such as efficient caching, which could have eliminated the need for complex useEffect setups that often lead to error-prone code. Additionally, its built-in hooks like useQuery and useMutation for managing loading states and errors could have streamlined the development process significantly.

In conjunction with react-query, leveraging `react-hook-form` would have provided a more organized and readable approach to managing state, validation, and form submissions. The seamless integration of `yup` with react-hook-form could have further enhanced the validation process by easily enforcing constraints such as character limits and other validation requirements.
