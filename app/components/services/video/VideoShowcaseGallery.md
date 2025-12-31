# VideoShowcaseGallery Component

A content-driven video gallery component for showcasing multiple video assets. Designed specifically for the Video Growth Engine™ service page, but reusable across the site.

## Features

- 📹 Display multiple videos in a responsive grid layout
- 🎨 Uses existing Nuxt UI components (UPageSection, UPageCard, UPageGrid)
- ✨ FadeInUp animations with staggered delays for smooth appearance
- 📝 Optional titles and descriptions for each video
- 🖼️ Poster image support for video thumbnails
- ⚙️ Fully configurable through YAML content files
- 🔒 Type-safe with Zod schema validation

## Usage

### 1. Add Video Showcase Data to Content File

Edit your content YAML file (e.g., `content/0.videoengine.yml`):

```yaml
videoShowcase:
  title: Client Video Success Stories
  description: See real examples of how our Video Growth Engine™ has helped B2B companies
  headline: Video Proof Clips
  videos:
    - title: Manufacturing Success Story
      description: How a manufacturing company shortened their sales cycle with strategic video content
      src: https://example.com/video1.mp4
      poster: /images/poster1.png
    - title: Financial Services Case Study
      description: B2B financial firm increases qualified leads with targeted video messaging
      src: https://example.com/video2.mp4
      poster: /images/poster2.png
    - title: Professional Services Testimonial
      description: Consulting firm builds trust and credibility with client testimonial videos
      src: https://example.com/video3.mp4
      poster: /images/poster3.png
```

### 2. Use the Component in Your Page

In your Vue page component (e.g., `app/pages/services/video-growth-engine.vue`):

```vue
<template>
  <div>
    <!-- Other page content -->
  
    <VideoShowcaseGallery
      v-if="page.videoShowcase"
      :title="page.videoShowcase.title"
      :description="page.videoShowcase.description"
      :headline="page.videoShowcase.headline"
      :videos="page.videoShowcase.videos"
    />
  
    <!-- More page content -->
  </div>
</template>

<script setup>
const { data: page } = await useAsyncData('video-growth-engine', () =>
  queryCollection('videoengine').first()
);
</script>
```

## Props

| Prop            | Type            | Required | Default                                             | Description                              |
| --------------- | --------------- | -------- | --------------------------------------------------- | ---------------------------------------- |
| `title`       | `string`      | No       | "Video Showcase"                                    | Main title of the video showcase section |
| `description` | `string`      | No       | "Explore our video work and client success stories" | Description text below the title         |
| `headline`    | `string`      | No       | -                                                   | Optional headline above the title        |
| `videos`      | `VideoItem[]` | No       | `[]`                                              | Array of video items to display          |

### VideoItem Interface

Each video in the `videos` array supports:

| Property        | Type       | Required      | Description                                          |
| --------------- | ---------- | ------------- | ---------------------------------------------------- |
| `src`         | `string` | **Yes** | URL or path to the video file                        |
| `title`       | `string` | No            | Title displayed above the video                      |
| `description` | `string` | No            | Description text displayed below the video           |
| `poster`      | `string` | No            | URL or path to the poster/thumbnail image            |
| `thumbnail`   | `string` | No            | Alternative to `poster` for backward compatibility |

## Schema Configuration

The component's data structure is validated in `content.config.ts`:

```typescript
videoShowcase: z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    headline: z.string().optional(),
    videos: z.array(
      z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        src: z.string().nonempty(),
        poster: z.string().optional(),
        thumbnail: z.string().optional(),
      }),
    ),
  })
  .optional(),
```

## Adding/Removing Videos

To add or remove videos, simply edit the YAML content file:

**Add a video:**

```yaml
videos:
  - title: New Video Title
    description: Video description here
    src: /path/to/video.mp4
    poster: /path/to/poster.jpg
```

**Remove a video:**
Simply delete the video entry from the `videos` array in the YAML file.

## Design Patterns

The component follows TruMedia Creative's established patterns:

- **Content-Driven**: All data comes from YAML files, not hardcoded in components
- **Type-Safe**: Uses Zod schemas for validation
- **Consistent UI**: Uses UPageSection, UPageCard, and UPageGrid from Nuxt UI
- **Animated**: Uses FadeInUp wrapper with staggered delays (0.1s per video)
- **Responsive**: Grid layout adapts to screen size automatically

## Examples

### Minimal Configuration

```yaml
videoShowcase:
  videos:
    - src: /video.mp4
```

### Full Configuration

```yaml
videoShowcase:
  title: Our Latest Work
  description: Check out our recent video production projects
  headline: Featured Videos
  videos:
    - title: Project Alpha
      description: A comprehensive video strategy for a B2B manufacturing company
      src: https://cdn.example.com/alpha.mp4
      poster: /images/alpha-poster.jpg
    - title: Project Beta
      description: Brand storytelling for a financial services firm
      src: https://cdn.example.com/beta.mp4
      poster: /images/beta-poster.jpg
```

## Notes

- Videos only appear if the `videoShowcase` section exists in the content file
- At least one video with a valid `src` is required for the section to display
- The component handles missing optional fields gracefully
- Video controls are enabled by default
- Videos use `preload="metadata"` for better performance
