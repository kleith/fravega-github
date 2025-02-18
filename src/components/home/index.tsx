import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Divider,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Paper,
  TableContainer,
  Toolbar,
  Typography,
} from "@mui/material";
import { Table } from "./Table";

const rows = [
  {
    login: "mojombo",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mojombo",
    html_url: "https://github.com/mojombo",
    followers_url: "https://api.github.com/users/mojombo/followers",
    following_url:
      "https://api.github.com/users/mojombo/following{/other_user}",
    gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
    starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
    organizations_url: "https://api.github.com/users/mojombo/orgs",
    repos_url: "https://api.github.com/users/mojombo/repos",
    events_url: "https://api.github.com/users/mojombo/events{/privacy}",
    received_events_url: "https://api.github.com/users/mojombo/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
  },
  {
    login: "defunkt",
    id: 2,
    node_id: "MDQ6VXNlcjI=",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/defunkt",
    html_url: "https://github.com/defunkt",
    followers_url: "https://api.github.com/users/defunkt/followers",
    following_url:
      "https://api.github.com/users/defunkt/following{/other_user}",
    gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
    starred_url: "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
    organizations_url: "https://api.github.com/users/defunkt/orgs",
    repos_url: "https://api.github.com/users/defunkt/repos",
    events_url: "https://api.github.com/users/defunkt/events{/privacy}",
    received_events_url: "https://api.github.com/users/defunkt/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
  },
];

export const Home = () => {
  return (
    <>
      <Typography variant="h4" py={2}>
        Github
      </Typography>
      <TableContainer component={Paper}>
        <Toolbar>
          <Typography variant="h6" id="tableTitle" component="div">
            Usuarios
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <FormControl variant="outlined" size="small">
            <OutlinedInput
              type="text"
              id="user-search"
              placeholder="Buscar usuario"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Toolbar>
        <Divider />
        <Table rows={rows} />
      </TableContainer>
    </>
  );
};
