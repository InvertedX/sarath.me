import React from 'react'
import {CardMedia} from 'material-ui/Card'
import Card from 'material-ui/Card/Card'
import Button from 'material-ui/Button/Button'
import CardActions from 'material-ui/Card/CardActions'
import CardContent from 'material-ui/Card/CardContent'
import Typography from 'material-ui/Typography/Typography'
import {withStyles} from 'material-ui'

const styles = theme => ({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 100,
  }
});

const Post = ({data, classes}) => (<Button style={{padding: 0}}>
      <Card className={classes.card}>
        <CardMedia
            className={classes.media}
            image="https://d33wubrfki0l68.cloudfront.net/762078ae555fb82cd5fb645d37bd668e40a91947/e56a7/assets/images/graphics/step_2.svg"
            title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {data.frontmatter.title}
          </Typography>
          <Typography component="p">
            {data.excerpt}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Button>
)

export default withStyles(styles)(Post)
