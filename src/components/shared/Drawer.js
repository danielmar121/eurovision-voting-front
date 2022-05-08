import { useState } from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ChevronLeft, ChevronRight, Menu } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppButton from './AppButton';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background:
      'linear-gradient(45deg, #F60707 16%, #F09501 32%, #F7F712 48%, #46B229 65%, #1826E6 81%, #960DDA 100%)',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
  buttons: { display: 'flex', aligncontent: 'center', m: '1' },
}));

export default function PersistentDrawerLeft({
  openRoutesFuncs,
  routes,
  routesIcons,
  sectionName,
  pagesNames,
  openPage,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {sectionName}
          </Typography>
          <Box className={classes.buttons}>
            {pagesNames.map((pageName) => (
              <AppButton
                key={pageName}
                handleSubmit={() => openPage({ name: pageName })}
                buttonName={pageName}
              ></AppButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => {
                handleDrawerClose();
                openRoutesFuncs[index]();
              }}
            >
              <ListItemIcon>{routesIcons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

PersistentDrawerLeft.propTypes = {
  openRoutesFuncs: PropTypes.array,
  routes: PropTypes.array,
  routesIcons: PropTypes.array,
  pagesNames: PropTypes.array,
  sectionName: PropTypes.string,
  openPage: PropTypes.func,
};
