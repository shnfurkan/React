import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function Course({image,title,text}) {
    return (
        <ImageList sx={{ width: 600, height: 300 }}>
            <ImageListItem key={image}>
              <img
                src={`${image}?w=248&fit=crop&auto=format`}
                srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={title}
                loading="lazy"
              />
              <ImageListItemBar
                title={title}
                subtitle={<span>{text}</span>}
                position="below"
              />
            </ImageListItem>
        </ImageList>
      );
}

export default Course;
