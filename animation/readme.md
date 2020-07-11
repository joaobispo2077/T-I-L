#Animação CSS e SVG [Revisão]

<h1>Atributo Animation</h1>
<strong>
<p>
    .qualquer__classe{
        animation: nome duracao suavidade iteracao  direcao delay;
    }

    nome{
        Da animação que você criou na tag @keyframe
        ou um atributo CSS dentro de uma tag hover
    }

    duracao{
        tempo em segundos
    }

    suavidade{
        ease
        ease-in
        ease-out
        ease-in-out
    }

    iteracao{
        forwards (para no estado que ela chegar)
        infinite or
        1 (e retorna ao estado inicial)or
        10 or
        37 or
        ....
    }
    alternate{
        normal
        reverse
        alternate
        alternate-reverse
    }
    delay{
        quanto tempo a animação vai demorar para COMEÇAR
    }
</p>
</strong>
<strong>
<p>
 Atributos interessantes


    Opacity{
        para criar animações com mudança na opacidade (recebe valores em porcentagem)
    }

    translate(X, Y) {
        para criar animações que variam o seu eixo X e/ou Y
    }

    fill{
        transparent to collor
    }
    stroke{
        .classe_svg path{
            stroke-widht: 4px;
            stroke: collor;
            stroke-dasharray: 0;
            stroke-dashoffset: 0;
        }

    }
</p>
</strong>

<h1> Use animate with SVG </h1>
<p> Case 1: I prefer to animate SVG's elements INSIDE SVG (element per element) </p>
<p> Case 2: I prefer to animate entire svg on tag IMAGE </p>
<p> Case 3: I prefer to use static svg in/on css </p>


<h1> Use background attributte </h1>

<p>
 my use


    .any_container_or_div{
        background: image repeat 
        position-x-y / scale-image;
    }


</p>
</strong>