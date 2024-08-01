import { createContext, useState, useEffect } from "react";


const BlogContext = createContext();

function BlogProvider({ children }) {
  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    const fetchedPosts = [
      {
        id: 1,
        header: "Top 20 Handbag Trends to Know",
        views: "129",
        isFeatured: true,
        categories: ["travel", "fashion"],
        href: "https://cdn.pixabay.com/photo/2019/10/01/10/49/girl-4517873_640.jpg",
        details: "Discover the top 20 handbag trends you need to know about this season. From oversized totes to mini bags, we've got you covered.",
        dateCreated: "4 weeks ago",
        readLength: "3 mins",
        comments: ["a","b","c","d"]
      },
      {
        id: 2,
        header: "The Ultimate Travel Guide to Japan",
        views: "123",
        isFeatured: true,
        categories: ["guides", "travel"],
        href: "https://cdn.pixabay.com/photo/2019/07/13/16/44/woman-4335235_640.jpg",
        details: "Explore the best travel tips, must-visit places, and culinary delights in Japan with our ultimate travel guide.",
        dateCreated: "4 weeks ago",
        readLength: "5 mins"
      },
      {
        id: 3,
        header: "Understanding Async Programming in JavaScript",
        views: "139",
        isFeatured: true,
        categories: ["programming", "technology"],
        href: "https://cdn.pixabay.com/photo/2024/05/21/19/58/code-8779051_640.jpg",
        details: "Async programming can be tricky. Learn the basics of asynchronous JavaScript, including promises, async/await, and more.",
        dateCreated: "4 weeks ago",
        readLength: "4 mins"
      },
      {
        id: 4,
        header: "Top 10 Beach Destinations for 2024",
        views: "239",
        isFeatured: true,
        categories: ["travel", "destination"],
        href: "https://cdn.pixabay.com/photo/2021/08/02/16/22/beach-6517214_1280.jpg",
        details: "Planning a beach vacation? Here are the top 10 beach destinations you should consider for your next getaway in 2024.",
        dateCreated: "4 weeks ago",
        readLength: "6 mins"
      },
      {
        id: 5,
        header: "Gourmet Food Trends for 2024",
        views: "1239",
        isFeatured: true,
        categories: ["food", "trends"],
        href: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_640.jpg",
        details: "Get a sneak peek at the hottest gourmet food trends that will dominate 2024. From plant-based innovations to exotic spices.",
        dateCreated: "4 weeks ago",
        readLength: "3 mins"
      },
      {
        id: 6,
        header: "A Beginner's Guide to Python Programming",
        views: "2329",
        isFeatured: true,
        categories: ["programming", "guides"],
        href: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_640.jpg",
        details: "Python is a great language for beginners. This guide covers the basics of Python programming, including syntax, data types, and simple projects.",
        dateCreated: "4 weeks ago",
        readLength: "8 mins"
      },
      {
        id: 7,
        header: "Exploring the Best Hotels in Europe",
        views: "3239",
        isFeatured: true,
        categories: ["travel", "hotels"],
        href: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_640.jpg",
        details: "From budget-friendly options to luxury stays, explore the best hotels in Europe for your next trip.",
        dateCreated: "4 weeks ago",
        readLength: "5 mins"
      },
      {
        id: 8,
        header: "Healthy Eating: Top Tips for a Balanced Diet",
        views: "129",
        isFeatured: true,
        categories: ["food", "health"],
        href: "https://cdn.pixabay.com/photo/2015/07/15/16/05/girl-846357_1280.jpg",
        details: "Learn how to maintain a balanced diet with these top healthy eating tips. Perfect for those looking to improve their nutrition.",
        dateCreated: "4 weeks ago",
        readLength: "4 mins"
      },
      {
        id: 9,
        header: "Top Coding Bootcamps to Launch Your Career",
        views: "129",
        isFeatured: true,
        categories: ["education", "programming"],
        href: "https://cdn.pixabay.com/photo/2024/06/14/12/15/developer-8829709_640.jpg",
        details: "Looking to start a career in tech? Check out our list of top coding bootcamps that can help you get started.",
        dateCreated: "4 weeks ago",
        readLength: "5 mins"
      },
      {
        id: 10,
        header: "Top 5 JavaScript Frameworks to Learn in 2024",
        views: "3239",
        isFeatured: true,
        categories: ["programming", "technology"],
        href: "https://cdn.pixabay.com/photo/2017/07/31/14/45/code-2558220_640.jpg",
        details: "Stay ahead in the web development game by learning these top JavaScript frameworks in 2024. From React to Vue, we've got you covered.",
        dateCreated: "4 weeks ago",
        readLength: "6 mins"
      },
      {
        id: 11,
        header: "Top 10 Healthy Recipes for Busy Weeknights",
        views: "289",
        isFeatured: true,
        categories: ["food", "health"],
        href: "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_640.jpg",
        details: "Struggling to find time to cook healthy meals? Check out these top 10 healthy recipes perfect for busy weeknights.",
        dateCreated: "3 weeks ago",
        readLength: "5 mins"
      },
      {
        id: 12,
        header: "The Future of AI in Healthcare",
        views: "459",
        isFeatured: true,
        categories: ["technology", "health"],
        href: "https://cdn.pixabay.com/photo/2015/05/13/23/40/eye-766166_640.jpg",
        details: "AI is transforming healthcare. Explore the future of AI in healthcare and how it's improving patient outcomes.",
        dateCreated: "2 weeks ago",
        readLength: "7 mins"
      },
      {
        id: 13,
        header: "Best Hiking Trails in the US",
        views: "679",
        isFeatured: true,
        categories: ["travel", "outdoors"],
        href: "https://cdn.pixabay.com/photo/2019/07/22/16/13/children-4355469_640.jpg",
        details: "Love hiking? Discover the best hiking trails in the US, from easy walks to challenging mountain hikes.",
        dateCreated: "4 weeks ago",
        readLength: "6 mins"
      },
      {
        id: 14,
        header: "How to Start a Blog: A Step-by-Step Guide",
        views: "789",
        isFeatured: true,
        categories: ["education", "guides"],
        href: "https://cdn.pixabay.com/photo/2014/02/13/07/28/wordpress-265132_640.jpg",
        details: "Want to start a blog? Follow our step-by-step guide to set up your blog and start creating content today.",
        dateCreated: "1 week ago",
        readLength: "8 mins"
      },
      {
        id: 15,
        header: "Top 10 Destinations for Adventure Travel",
        views: "349",
        isFeatured: true,
        categories: ["travel", "adventure", "destination"],
        href: "https://cdn.pixabay.com/photo/2017/08/06/18/29/woman-2594934_640.jpg",
        details: "Looking for adventure? Check out these top 10 destinations for adventure travel, from jungles to deserts.",
        dateCreated: "2 weeks ago",
        readLength: "7 mins"
      },
      {
        id: 16,
        header: "The Benefits of Meditation",
        views: "229",
        isFeatured: true,
        categories: ["health", "wellness", "destination"],
        href: "https://cdn.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_640.jpg",
        details: "Meditation can have a profound impact on your mental and physical health. Learn about the benefits of meditation and how to get started.",
        dateCreated: "1 week ago",
        readLength: "5 mins"
      },
      {
        id: 17,
        header: "Understanding Cloud Computing",
        views: "589",
        isFeatured: true,
        categories: ["technology", "education"],
        href: "https://cdn.pixabay.com/photo/2023/05/01/09/20/ai-generated-7962522_640.jpg",
        details: "Cloud computing is revolutionizing how we store and access data. Learn the basics of cloud computing and its benefits.",
        dateCreated: "3 weeks ago",
        readLength: "6 mins"
      },
      {
        id: 18,
        header: "A Guide to Digital Marketing for Beginners",
        views: "499",
        isFeatured: true,
        categories: ["education", "marketing"],
        href: "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_640.jpg",
        details: "New to digital marketing? This guide covers the fundamentals of digital marketing, including SEO, social media, and email marketing.",
        dateCreated: "2 weeks ago",
        readLength: "7 mins"
      },
      {
        id: 19,
        header: "The Best Fitness Apps to Keep You Motivated",
        views: "689",
        isFeatured: true,
        categories: ["health", "technology"],
        href: "https://cdn.pixabay.com/photo/2021/04/07/05/56/woman-6158134_640.jpg",
        details: "Staying fit can be challenging. Discover the best fitness apps that will help you stay motivated and achieve your fitness goals.",
        dateCreated: "3 weeks ago",
        readLength: "5 mins"
      },
      {
        id: 20,
        header: "Exploring the Benefits of Remote Work",
        views: "729",
        isFeatured: true,
        categories: ["business", "technology"],
        href: "https://cdn.pixabay.com/photo/2022/08/21/15/40/woman-7401593_640.jpg",
        details: "Remote work is becoming increasingly popular. Learn about the benefits of remote work and how to stay productive while working from home.",
        dateCreated: "1 week ago",
        readLength: "6 mins"
      },
    ];
    

    setBlogPost(fetchedPosts);
  }, []);

 
  return (
    <BlogContext.Provider
      value={{
        blogPost
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export { BlogProvider };
export default BlogContext;
