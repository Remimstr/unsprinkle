import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={`
              ${src.replace('.jpg', '@3x.avif')},
              ${src.replace('.jpg', '@2x.avif')},
              ${src.replace('.jpg', '.avif')},
            `}
          />

          <source
            type="image/jpeg"
            srcSet={`
              ${src.replace('.jpg', '@3x.jpeg')},
              ${src.replace('.jpg', '@2x.jpeg')},
              ${src.replace('.jpg', '.jpeg')},
            `}
          />
          <Image alt="" src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  aspect-ratio: 1;
  object-fit: cover;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  line-height: 2rem;
  color: var(--color-gray-800);
`;

const Tags = styled.ul`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  ${Tag}:not(:first-child) {
    margin-left: 8px;
  }
`;

export default PhotoGridItem;
