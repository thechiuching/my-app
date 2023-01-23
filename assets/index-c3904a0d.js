(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();function c(){}function B(e){return e()}function A(){return Object.create(null)}function g(e){e.forEach(B)}function N(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function L(e){return Object.keys(e).length===0}function b(e,t,i){e.insertBefore(t,i||null)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function F(e){return document.createTextNode(e)}function H(){return F(" ")}function G(e){return Array.from(e.childNodes)}let k;function m(e){k=e}const d=[],E=[],p=[],q=[],J=Promise.resolve();let w=!1;function O(){w||(w=!0,J.then($))}function v(e){p.push(e)}const y=new Set;let h=0;function $(){if(h!==0)return;const e=k;do{try{for(;h<d.length;){const t=d[h];h++,m(t),Y(t.$$)}}catch(t){throw d.length=0,h=0,t}for(m(null),d.length=0,h=0;E.length;)E.pop()();for(let t=0;t<p.length;t+=1){const i=p[t];y.has(i)||(y.add(i),i())}p.length=0}while(d.length);for(;q.length;)q.pop()();w=!1,y.clear(),m(e)}function Y(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(v)}}const z=new Set;function R(e,t){e&&e.i&&(z.delete(e),e.i(t))}function T(e,t,i,s){const{fragment:a,after_update:o}=e.$$;a&&a.m(t,i),s||v(()=>{const r=e.$$.on_mount.map(B).filter(N);e.$$.on_destroy?e.$$.on_destroy.push(...r):g(r),e.$$.on_mount=[]}),o.forEach(v)}function P(e,t){const i=e.$$;i.fragment!==null&&(g(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function S(e,t){e.$$.dirty[0]===-1&&(d.push(e),O(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,i,s,a,o,r,W=[-1]){const u=k;m(e);const n=e.$$={fragment:null,ctx:[],props:o,update:c,not_equal:a,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:A(),dirty:W,skip_bound:!1,root:t.target||u.$$.root};r&&r(n.root);let I=!1;if(n.ctx=i?i(e,t.props||{},(l,x,..._)=>{const j=_.length?_[0]:x;return n.ctx&&a(n.ctx[l],n.ctx[l]=j)&&(!n.skip_bound&&n.bound[l]&&n.bound[l](j),I&&S(e,l)),x}):[],n.update(),I=!0,g(n.before_update),n.fragment=s?s(n.ctx):!1,t.target){if(t.hydrate){const l=G(t.target);n.fragment&&n.fragment.l(l),l.forEach(f)}else n.fragment&&n.fragment.c();t.intro&&R(e.$$.fragment),T(e,t.target,t.anchor,t.customElement),$()}m(u)}class C{$destroy(){P(this,1),this.$destroy=c}$on(t,i){if(!N(i))return c;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(i),()=>{const a=s.indexOf(i);a!==-1&&s.splice(a,1)}}$set(t){this.$$set&&!L(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function X(e){let t,i,s;return{c(){t=M("head"),t.innerHTML=`<link href="src/assets/main.css" media="screen" rel="stylesheet"/> 
  <link rel="stylesheet" type="text/css" href="src/assets/mouse.css"/>`,i=H(),s=M("body"),s.innerHTML=`<div class="nav"><div><a target="_blank" href="https://goo.gl/maps/fd6QEF3vfTDc7PXn7">New York City</a></div> 
      <div><a href="">Please stare at the time</a></div> 
      <div><a target="_blank" href="https://read.cv/chiuching">Ivy Tsang</a></div></div> 
  
    
    
    <div class="content"><img class="content__img" src="https://i.imgur.com/FNDoX4A.png"/> 
      <img class="content__img" src="https://i.imgur.com/TEDdaGl.png"/> 
      <img class="content__img" src="https://i.imgur.com/98iNzFm.png"/> 
      <img class="content__img" src="https://i.imgur.com/LaAJAeQ.png"/> 
      <img class="content__img" src="https://i.imgur.com/wgwubId.png"/> 
      <img class="content__img" src="https://i.imgur.com/vYzHERi.png"/> 
      <img class="content__img" src="https://i.imgur.com/97XG28j.png"/> 
      <img class="content__img" src="https://i.imgur.com/lMdjENp.png"/> 
      <img class="content__img" src="https://i.imgur.com/FNDoX4A.png"/> 
      <img class="content__img" src="https://i.imgur.com/TEDdaGl.png"/> 
      <img class="content__img" src="https://i.imgur.com/98iNzFm.png"/> 
      <img class="content__img" src="https://i.imgur.com/LaAJAeQ.png"/></div> 

  
  <div class="hoverable"><div class="cardList" id="cardList"><div class="blog" style="border: 1px solid #00FFC3; background: url(https://images.unsplash.com/photo-1673744237819-3e7caabf2a08?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=987&amp;q=80); color:#00FFC3"><div class="publishDate" style="color:#00FFC3"><div>Jan 17</div><div>2023</div></div> 
        <div class="previewText"><h1>A FORTRESS IN THE SKY</h1></div> 
        <div class="blogData" id="blogData" style="background-color:#9DB891; color:white"><p class="title">When Do We Become An Adult?</p> 

          <p class="essay">I recently came across a version of adulthood that was broken down
            into two phases: the first half as acquisitional and the latter half
            as relational. It seemed like a truthful statement; nevertheless, it
            was hard to swallow for someone who still believes in friendships
            that shelter our idealism in a transactional world. <br/><br/>
            Alas at the beginning of last year, I was reluctant to enter the first
            half of this ominous trajectory I was long cautioned about: where I must
            leave behind any vision of my younger self as the uncommonly pure, creative,
            and powerful as Melissa Febos recalls in Girlhood — her philosophical
            treatise. And instead, prepare for the beautifully passive and impossibly
            sad Womanhood — everyone else&#39;s treatise. <br/></p> 
          <img src="https://www.nps.gov/articles/images/Migrating-Birds_NPS_Jim-Pfeiffenberger.jpg?maxwidth=1200&amp;autorotate=false" alt="Birds in the sky"/> 
          <p class="essay">However, just as I was fast approaching this station, unforeseeable
            circumstances brought my mom and I back together in the most
            unlikely of times: her entering the “second wind” of her life and me
            just entering the first. Like most parents and children, we were not
            expecting to be going through such transitions while living in close
            quarters. <br/><br/> In truth, most emerging elders do not expect
            to be contemplating their mortality while folding their adult
            children&#39;s laundry, and most young adults certainly do not
            expect to be constructing their identities from their childhood
            bedrooms. <br/><br/> Yet, to my surprise, this juxtaposition
            became a much needed catalyst in our lives. Because while I
            experienced a sudden intrusion of life, my mom experienced a
            heightened obtrusion of death, forcing us both to develop a new
            relationship with mortality and posterity; to straddle the titles of
            “mother” and “daughter” more delicately. <br/></p> 
          <img src="https://static01.nyt.com/images/2021/12/30/us/00NEW-YEAR-5-copy/00NEW-YEAR-5-copy-superJumbo.jpg?quality=75&amp;auto=webp" alt="A plane shooting across the sky"/> 
          <p class="essay">More recently, my mom witnessed an escalation of friends and
            relatives around her grow older and sicker and begin to pass away.
            Her old boyfriend we bumped into in the train station disclosed that
            both his hairline and lifeline was receding due to a cancer
            diagnosis. Leaving us wandering away with a sense of remorse for
            time. Who will we bump into next in this uncanny train station of
            ex-boyfriends and sick passerbyers? (We don&#39;t visit this station
            anymore.) <br/><br/> And my grandma, who once stood so tall and
            authoritative, has also slumped in the many chairs that seem to
            follow us wherever we go. In her last effort, my mom reminds my
            grandma to straighten her posture with the same warning she would
            give my brother and I when we were small. <br/><br/> My mom&#39;s
            emerging responsibilities as a family caretaker reminded me of a
            picture book by Robert Munsch: it follows an evolving relationship
            between a son and his mom who both at one point in their lives must
            cradle the other in their arms. <br/><br/> Upon reading it at the
            age of nine, I was completely struck by the ineffable cycle of
            affection the book described. I spent that afternoon sprawled across
            the carpeted floors of my primary school library flipping the book
            back and forth, imagining I had the power to jump from being a
            college student whenever I felt juvenile or bringing home a new
            grandchild whenever I felt sensible. <br/><br/> To some extent, we
            all secretly wish for this power to jump between phases of our
            adulthood. Or better yet, flipping back to childhood whenever we
            want. Unfortunately, we don&#39;t all get to choose when the winds
            will hit us. <br/><br/> My mom was just realizing her duties to
            care for her aging mother when the time came to start realizing her
            transforming presence for her adult children. And it seemed like the
            most natural of transitions in any parent and child&#39;s
            relationship: something foreign and exhilarating, but absolutely
            necessary. <br/><br/> However, seeing my mom take care of her own
            mother made me realize the inevitable day when I must take care of
            her. Even though such duties seem far away at this moment, I find
            this fate more fulfilling than daunting. And perhaps this
            recognition is the true transformation. Because, if I have learned
            anything from my first year as an adult, no phase in our
            relationship with our parents will ever be anything less than
            relational; less than unconditional. <br/><br/> No matter how you
            break down adulthood, our moms remain a real friend who helps us
            believe (against all odds) in our own consequences as we go about
            life. An act of imagination afterall, as writer Megan O&#39;Grady
            said. For the essence of building a friendship with our parents is
            the mutual effort of release and respect: when mom understands best
            that adulthood means a series of mistakes that will eventually
            impress upon us the importance of living life openly. <br/></p> 
          <img src="https://static01.nyt.com/images/2021/12/29/us/00newyear-1-04-copy/00newyear-1-04-copy-superJumbo.jpg?quality=75&amp;auto=webp" alt="Girl looking at the world"/> 
          <p class="essay">Although life can certainly feel more acquisitional at times, it
            never hurts to cherish the relational side of our lives that already
            exists and has made us who we are. <br/><br/> And so here is another
            take on adulthood: a piece of ice on a hot stove that must ride on its
            own melting. It seems like this year has finally start to turn from ice
            to steam.&quot;,</p></div></div></div> 
    <div class="cardList" id="cardList"><div class="blog" style="background-color:#9DB891; color:white"><h1>Age</h1> 
        <div class="blogData" id="blogData" style="background-color:#9DB891; color:white"><p class="title">When Do We Become An Adult?</p> 

          <p class="essay">I recently came across a version of adulthood that was broken down
            into two phases: the first half as acquisitional and the latter half
            as relational. It seemed like a truthful statement; nevertheless, it
            was hard to swallow for someone who still believes in friendships
            that shelter our idealism in a transactional world. <br/><br/>
            Alas at the beginning of last year, I was reluctant to enter the first
            half of this ominous trajectory I was long cautioned about: where I must
            leave behind any vision of my younger self as the uncommonly pure, creative,
            and powerful as Melissa Febos recalls in Girlhood — her philosophical
            treatise. And instead, prepare for the beautifully passive and impossibly
            sad Womanhood — everyone else&#39;s treatise. <br/></p> 
          <img src="https://www.nps.gov/articles/images/Migrating-Birds_NPS_Jim-Pfeiffenberger.jpg?maxwidth=1200&amp;autorotate=false" alt="Birds in the sky"/> 
          <p class="essay">However, just as I was fast approaching this station, unforeseeable
            circumstances brought my mom and I back together in the most
            unlikely of times: her entering the “second wind” of her life and me
            just entering the first. Like most parents and children, we were not
            expecting to be going through such transitions while living in close
            quarters. <br/><br/> In truth, most emerging elders do not expect
            to be contemplating their mortality while folding their adult
            children&#39;s laundry, and most young adults certainly do not
            expect to be constructing their identities from their childhood
            bedrooms. <br/><br/> Yet, to my surprise, this juxtaposition
            became a much needed catalyst in our lives. Because while I
            experienced a sudden intrusion of life, my mom experienced a
            heightened obtrusion of death, forcing us both to develop a new
            relationship with mortality and posterity; to straddle the titles of
            “mother” and “daughter” more delicately. <br/></p> 
          <img src="https://static01.nyt.com/images/2021/12/30/us/00NEW-YEAR-5-copy/00NEW-YEAR-5-copy-superJumbo.jpg?quality=75&amp;auto=webp" alt="A plane shooting across the sky"/> 
          <p class="essay">More recently, my mom witnessed an escalation of friends and
            relatives around her grow older and sicker and begin to pass away.
            Her old boyfriend we bumped into in the train station disclosed that
            both his hairline and lifeline was receding due to a cancer
            diagnosis. Leaving us wandering away with a sense of remorse for
            time. Who will we bump into next in this uncanny train station of
            ex-boyfriends and sick passerbyers? (We don&#39;t visit this station
            anymore.) <br/><br/> And my grandma, who once stood so tall and
            authoritative, has also slumped in the many chairs that seem to
            follow us wherever we go. In her last effort, my mom reminds my
            grandma to straighten her posture with the same warning she would
            give my brother and I when we were small. <br/><br/> My mom&#39;s
            emerging responsibilities as a family caretaker reminded me of a
            picture book by Robert Munsch: it follows an evolving relationship
            between a son and his mom who both at one point in their lives must
            cradle the other in their arms. <br/><br/> Upon reading it at the
            age of nine, I was completely struck by the ineffable cycle of
            affection the book described. I spent that afternoon sprawled across
            the carpeted floors of my primary school library flipping the book
            back and forth, imagining I had the power to jump from being a
            college student whenever I felt juvenile or bringing home a new
            grandchild whenever I felt sensible. <br/><br/> To some extent, we
            all secretly wish for this power to jump between phases of our
            adulthood. Or better yet, flipping back to childhood whenever we
            want. Unfortunately, we don&#39;t all get to choose when the winds
            will hit us. <br/><br/> My mom was just realizing her duties to
            care for her aging mother when the time came to start realizing her
            transforming presence for her adult children. And it seemed like the
            most natural of transitions in any parent and child&#39;s
            relationship: something foreign and exhilarating, but absolutely
            necessary. <br/><br/> However, seeing my mom take care of her own
            mother made me realize the inevitable day when I must take care of
            her. Even though such duties seem far away at this moment, I find
            this fate more fulfilling than daunting. And perhaps this
            recognition is the true transformation. Because, if I have learned
            anything from my first year as an adult, no phase in our
            relationship with our parents will ever be anything less than
            relational; less than unconditional. <br/><br/> No matter how you
            break down adulthood, our moms remain a real friend who helps us
            believe (against all odds) in our own consequences as we go about
            life. An act of imagination afterall, as writer Megan O&#39;Grady
            said. For the essence of building a friendship with our parents is
            the mutual effort of release and respect: when mom understands best
            that adulthood means a series of mistakes that will eventually
            impress upon us the importance of living life openly. <br/></p> 
          <img src="https://static01.nyt.com/images/2021/12/29/us/00newyear-1-04-copy/00newyear-1-04-copy-superJumbo.jpg?quality=75&amp;auto=webp" alt="Girl looking at the world"/> 
          <p class="essay">Although life can certainly feel more acquisitional at times, it
            never hurts to cherish the relational side of our lives that already
            exists and has made us who we are. <br/><br/> And so here is another
            take on adulthood: a piece of ice on a hot stove that must ride on its
            own melting. It seems like this year has finally start to turn from ice
            to steam.&quot;,</p></div></div></div> 
    <div class="cardList" id="cardList"><div class="blog" style="background-color:#9DB891; color:white"><h3>Jan 17</h3> 
        <h1>3</h1> 
        <div class="blogData" id="blogData" style="background-color:#9DB891; color:white"><p class="title">When Do We Become An Adult?</p> 

          <p class="essay">I recently came across a version of adulthood that was broken down
            into two phases: the first half as acquisitional and the latter half
            as relational. It seemed like a truthful statement; nevertheless, it
            was hard to swallow for someone who still believes in friendships
            that shelter our idealism in a transactional world. <br/><br/>
            Alas at the beginning of last year, I was reluctant to enter the first
            half of this ominous trajectory I was long cautioned about: where I must
            leave behind any vision of my younger self as the uncommonly pure, creative,
            and powerful as Melissa Febos recalls in Girlhood — her philosophical
            treatise. And instead, prepare for the beautifully passive and impossibly
            sad Womanhood — everyone else&#39;s treatise. <br/></p> 
          <img src="https://www.nps.gov/articles/images/Migrating-Birds_NPS_Jim-Pfeiffenberger.jpg?maxwidth=1200&amp;autorotate=false" alt="Birds in the sky"/> 
          <p class="essay">However, just as I was fast approaching this station, unforeseeable
            circumstances brought my mom and I back together in the most
            unlikely of times: her entering the “second wind” of her life and me
            just entering the first. Like most parents and children, we were not
            expecting to be going through such transitions while living in close
            quarters. <br/><br/> In truth, most emerging elders do not expect
            to be contemplating their mortality while folding their adult
            children&#39;s laundry, and most young adults certainly do not
            expect to be constructing their identities from their childhood
            bedrooms. <br/><br/> Yet, to my surprise, this juxtaposition
            became a much needed catalyst in our lives. Because while I
            experienced a sudden intrusion of life, my mom experienced a
            heightened obtrusion of death, forcing us both to develop a new
            relationship with mortality and posterity; to straddle the titles of
            “mother” and “daughter” more delicately. <br/></p> 
          <img src="https://static01.nyt.com/images/2021/12/30/us/00NEW-YEAR-5-copy/00NEW-YEAR-5-copy-superJumbo.jpg?quality=75&amp;auto=webp" alt="A plane shooting across the sky"/> 
          <p class="essay">More recently, my mom witnessed an escalation of friends and
            relatives around her grow older and sicker and begin to pass away.
            Her old boyfriend we bumped into in the train station disclosed that
            both his hairline and lifeline was receding due to a cancer
            diagnosis. Leaving us wandering away with a sense of remorse for
            time. Who will we bump into next in this uncanny train station of
            ex-boyfriends and sick passerbyers? (We don&#39;t visit this station
            anymore.) <br/><br/> And my grandma, who once stood so tall and
            authoritative, has also slumped in the many chairs that seem to
            follow us wherever we go. In her last effort, my mom reminds my
            grandma to straighten her posture with the same warning she would
            give my brother and I when we were small. <br/><br/> My mom&#39;s
            emerging responsibilities as a family caretaker reminded me of a
            picture book by Robert Munsch: it follows an evolving relationship
            between a son and his mom who both at one point in their lives must
            cradle the other in their arms. <br/><br/> Upon reading it at the
            age of nine, I was completely struck by the ineffable cycle of
            affection the book described. I spent that afternoon sprawled across
            the carpeted floors of my primary school library flipping the book
            back and forth, imagining I had the power to jump from being a
            college student whenever I felt juvenile or bringing home a new
            grandchild whenever I felt sensible. <br/><br/> To some extent, we
            all secretly wish for this power to jump between phases of our
            adulthood. Or better yet, flipping back to childhood whenever we
            want. Unfortunately, we don&#39;t all get to choose when the winds
            will hit us. <br/><br/> My mom was just realizing her duties to
            care for her aging mother when the time came to start realizing her
            transforming presence for her adult children. And it seemed like the
            most natural of transitions in any parent and child&#39;s
            relationship: something foreign and exhilarating, but absolutely
            necessary. <br/><br/> However, seeing my mom take care of her own
            mother made me realize the inevitable day when I must take care of
            her. Even though such duties seem far away at this moment, I find
            this fate more fulfilling than daunting. And perhaps this
            recognition is the true transformation. Because, if I have learned
            anything from my first year as an adult, no phase in our
            relationship with our parents will ever be anything less than
            relational; less than unconditional. <br/><br/> No matter how you
            break down adulthood, our moms remain a real friend who helps us
            believe (against all odds) in our own consequences as we go about
            life. An act of imagination afterall, as writer Megan O&#39;Grady
            said. For the essence of building a friendship with our parents is
            the mutual effort of release and respect: when mom understands best
            that adulthood means a series of mistakes that will eventually
            impress upon us the importance of living life openly. <br/></p> 
          <img src="https://static01.nyt.com/images/2021/12/29/us/00newyear-1-04-copy/00newyear-1-04-copy-superJumbo.jpg?quality=75&amp;auto=webp" alt="Girl looking at the world"/> 
          <p class="essay">Although life can certainly feel more acquisitional at times, it
            never hurts to cherish the relational side of our lives that already
            exists and has made us who we are. <br/><br/> And so here is another
            take on adulthood: a piece of ice on a hot stove that must ride on its
            own melting. It seems like this year has finally start to turn from ice
            to steam.&quot;,</p></div></div></div> 
    <div class="cardList" id="cardList"><div class="blog" style="background-color:#9DB891; color:white"><h1>Jan 17th</h1> 
        <h1>2</h1> 
        <div class="blogData" id="blogData" style="background-color:#9DB891; color:white"><p class="title">When Do We Become An Adult?</p> 

          <p class="essay">I recently came across a version of adulthood that was broken down
            into two phases: the first half as acquisitional and the latter half
            as relational. It seemed like a truthful statement; nevertheless, it
            was hard to swallow for someone who still believes in friendships
            that shelter our idealism in a transactional world. <br/><br/>
            Alas at the beginning of last year, I was reluctant to enter the first
            half of this ominous trajectory I was long cautioned about: where I must
            leave behind any vision of my younger self as the uncommonly pure, creative,
            and powerful as Melissa Febos recalls in Girlhood — her philosophical
            treatise. And instead, prepare for the beautifully passive and impossibly
            sad Womanhood — everyone else&#39;s treatise. <br/></p> 
          <img src="https://www.nps.gov/articles/images/Migrating-Birds_NPS_Jim-Pfeiffenberger.jpg?maxwidth=1200&amp;autorotate=false" alt="Birds in the sky"/> 
          <p class="essay">However, just as I was fast approaching this station, unforeseeable
            circumstances brought my mom and I back together in the most
            unlikely of times: her entering the “second wind” of her life and me
            just entering the first. Like most parents and children, we were not
            expecting to be going through such transitions while living in close
            quarters. <br/><br/> In truth, most emerging elders do not expect
            to be contemplating their mortality while folding their adult
            children&#39;s laundry, and most young adults certainly do not
            expect to be constructing their identities from their childhood
            bedrooms. <br/><br/> Yet, to my surprise, this juxtaposition
            became a much needed catalyst in our lives. Because while I
            experienced a sudden intrusion of life, my mom experienced a
            heightened obtrusion of death, forcing us both to develop a new
            relationship with mortality and posterity; to straddle the titles of
            “mother” and “daughter” more delicately. <br/></p> 
          <img src="https://static01.nyt.com/images/2021/12/30/us/00NEW-YEAR-5-copy/00NEW-YEAR-5-copy-superJumbo.jpg?quality=75&amp;auto=webp" alt="A plane shooting across the sky"/> 
          <p class="essay">More recently, my mom witnessed an escalation of friends and
            relatives around her grow older and sicker and begin to pass away.
            Her old boyfriend we bumped into in the train station disclosed that
            both his hairline and lifeline was receding due to a cancer
            diagnosis. Leaving us wandering away with a sense of remorse for
            time. Who will we bump into next in this uncanny train station of
            ex-boyfriends and sick passerbyers? (We don&#39;t visit this station
            anymore.) <br/><br/> And my grandma, who once stood so tall and
            authoritative, has also slumped in the many chairs that seem to
            follow us wherever we go. In her last effort, my mom reminds my
            grandma to straighten her posture with the same warning she would
            give my brother and I when we were small. <br/><br/> My mom&#39;s
            emerging responsibilities as a family caretaker reminded me of a
            picture book by Robert Munsch: it follows an evolving relationship
            between a son and his mom who both at one point in their lives must
            cradle the other in their arms. <br/><br/> Upon reading it at the
            age of nine, I was completely struck by the ineffable cycle of
            affection the book described. I spent that afternoon sprawled across
            the carpeted floors of my primary school library flipping the book
            back and forth, imagining I had the power to jump from being a
            college student whenever I felt juvenile or bringing home a new
            grandchild whenever I felt sensible. <br/><br/> To some extent, we
            all secretly wish for this power to jump between phases of our
            adulthood. Or better yet, flipping back to childhood whenever we
            want. Unfortunately, we don&#39;t all get to choose when the winds
            will hit us. <br/><br/> My mom was just realizing her duties to
            care for her aging mother when the time came to start realizing her
            transforming presence for her adult children. And it seemed like the
            most natural of transitions in any parent and child&#39;s
            relationship: something foreign and exhilarating, but absolutely
            necessary. <br/><br/> However, seeing my mom take care of her own
            mother made me realize the inevitable day when I must take care of
            her. Even though such duties seem far away at this moment, I find
            this fate more fulfilling than daunting. And perhaps this
            recognition is the true transformation. Because, if I have learned
            anything from my first year as an adult, no phase in our
            relationship with our parents will ever be anything less than
            relational; less than unconditional. <br/><br/> No matter how you
            break down adulthood, our moms remain a real friend who helps us
            believe (against all odds) in our own consequences as we go about
            life. An act of imagination afterall, as writer Megan O&#39;Grady
            said. For the essence of building a friendship with our parents is
            the mutual effort of release and respect: when mom understands best
            that adulthood means a series of mistakes that will eventually
            impress upon us the importance of living life openly. <br/></p> 
          <img src="https://static01.nyt.com/images/2021/12/29/us/00newyear-1-04-copy/00newyear-1-04-copy-superJumbo.jpg?quality=75&amp;auto=webp" alt="Girl looking at the world"/> 
          <p class="essay">Although life can certainly feel more acquisitional at times, it
            never hurts to cherish the relational side of our lives that already
            exists and has made us who we are. <br/><br/> And so here is another
            take on adulthood: a piece of ice on a hot stove that must ride on its
            own melting. It seems like this year has finally start to turn from ice
            to steam.&quot;,</p></div></div></div></div> 
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.0.6/chroma.min.js" type="text/javascript"><\/script> 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.9/lottie_svg.min.js" type="text/javascript"><\/script> 
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"><\/script> 
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"><\/script> 
  <script src="src/assets/functions.js" type="text/javascript"><\/script>`},m(a,o){b(a,t,o),b(a,i,o),b(a,s,o)},p:c,i:c,o:c,d(a){a&&f(t),a&&f(i),a&&f(s)}}}class Q extends C{constructor(t){super(),U(this,t,null,X,D,{})}}new Q({target:document.getElementById("app")});
