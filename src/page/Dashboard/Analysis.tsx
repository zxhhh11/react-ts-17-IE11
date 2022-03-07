import { useDispatch, useSelector } from 'react-redux'

import { Button } from 'antd'
import Constants from '../../redux/constants'
import React from 'react'

interface User {
    lists: string[]
    num: number
    test: string
    role: string
}

const Analysis = () => {
    const dispatch = useDispatch()
    const num = useSelector((state: { user: User }) => state.user.num)
    const handleClick = () => {
        console.log(num, 'num')
        dispatch({
            type: Constants.INCREMENT,
            num: 3
        })
    }
    return (
        <div>
            Analysis{num}
            <Button type="primary" onClick={handleClick}>
                Increment
            </Button>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
                <li>32</li>
                <li>33</li>
                <li>34</li>
                <li>35</li>
                <li>36</li>
                <li>37</li>
                <li>38</li>
                <li>39</li>
                <li>40</li>
                <li>41</li>
                <li>42</li>
                <li>43</li>
                <li>44</li>
                <li>45</li>
                <li>46</li>
                <li>47</li>
                <li>48</li>
                <li>49</li>
                <li>50</li>
                <li>51</li>
                <li>52</li>
                <li>53</li>
                <li>54</li>
                <li>55</li>
                <li>56</li>
                <li>57</li>
                <li>58</li>
                <li>59</li>
                <li>60</li>
                <li>61</li>
                <li>62</li>
                <li>63</li>
                <li>64</li>
                <li>65</li>
                <li>66</li>
                <li>67</li>
                <li>68</li>
                <li>69</li>
                <li>70</li>
                <li>71</li>
                <li>72</li>
                <li>73</li>
                <li>74</li>
                <li>75</li>
                <li>76</li>
                <li>77</li>
                <li>78</li>
                <li>79</li>
                <li>80</li>
                <li>81</li>
                <li>82</li>
                <li>83</li>
                <li>84</li>
                <li>85</li>
                <li>86</li>
                <li>87</li>
                <li>88</li>
                <li>89</li>
                <li>90</li>
            </ul>
        </div>
    )
}

export default Analysis
