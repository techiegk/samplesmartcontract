pragma solidity >=0.4.22 <0.9.0;

library ConvertLib{
	function convert(uint amount,uint conversionRate) public returns (uint convertedAmount)
	{
		return amount * conversionRate;
	}
}
