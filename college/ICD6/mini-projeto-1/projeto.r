shopping1 <- read.csv("shopping.csv")


shopping2 <- read.csv("shopping2.csv")

head(shopping1)
head(shopping2)

mean(shopping1)
median(shopping1)
sd(shopping1)
quantile(shopping1)

mean(shopping2)
median(shopping2)
sd(shopping2)
quantile(shopping2)

boxplot(shopping1$chaveiro)
boxplot(shopping2$chaveiro)
